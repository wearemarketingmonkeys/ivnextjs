'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { menuItems } from '../mocks/menuItems';
import { MdOutlineChevronRight, MdArrowBack } from 'react-icons/md';

// Put /public/assets/img/logo/logo.svg in your project
const logo = '/assets/img/logo/logo.svg';

// Items shown when tapping “IV Therapy” at the root
const ivTherapyMenu = [
  { label: 'NAD+', href: '/iv-therapy/drips' },
  { label: 'Wellness', href: '/iv-therapy/drips' },
  { label: 'Recovery', href: '/iv-therapy/drips' },
  { label: 'Beauty', href: '/iv-therapy/drips' },
  { label: 'Fitness', href: '/iv-therapy/drips' },
  { label: 'Energy Boosters', href: '/iv-therapy/boosters' },
];

// Normalize any structure into {label, href} or a group with children
function normalizeItems(items = []) {
  return items
    .map((it) => {
      // Plain items like { label, to } or { label, href }
      if (it?.label && it?.to) return { label: it.label, href: it.to };
      if (it?.label && it?.href) return { label: it.label, href: it.href };

      // Some leaves come as { dripsName, dripsUrl }
      if (it?.dripsName && it?.dripsUrl) {
        return { label: it.dripsName, href: it.dripsUrl };
      }

      // Groups like { submenuTitle, submenu: [...] }
      if (it?.submenuTitle && Array.isArray(it.submenu)) {
        return { groupTitle: it.submenuTitle, children: normalizeItems(it.submenu) };
      }

      // WRAPPER CASE (your "Discover"):
      // { label, submenuWrapper: [{ submenuWrap: [{ submenuTitle, submenu: [...] }, ...] }, ...] }
      if (Array.isArray(it?.submenuWrapper)) {
        // 🚩 Promote all inner submenu items up one level so one tap shows the links
        const promotedLeaves = it.submenuWrapper.flatMap((sw) =>
          (sw.submenuWrap || []).flatMap((wrap) => wrap.submenu || [])
        );
        return { groupTitle: it.label || 'Menu', children: normalizeItems(promotedLeaves) };
      }

      return null;
    })
    .filter(Boolean);
}


export default function MobileMenu({ isOpen, onClose }) {
  const [stack, setStack] = useState([]); // [{ title, items }]

  const rootItems = normalizeItems(menuItems);
  const current = stack.length ? stack[stack.length - 1] : { title: 'Menu', items: rootItems };

  const goDeeper = (raw, title) => setStack((s) => [...s, { title, items: normalizeItems(raw) }]);
  const goBack = () => setStack((s) => s.slice(0, -1));
  const closeAll = () => {
    onClose?.();
    setStack([]);
  };

  return (
    <>
      <div className={`mobile-menu-overlay ${isOpen ? 'active' : ''}`} onClick={closeAll} />
      <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
        <div className="mobile-menu-header">
          <Link href="/">
            <img src={logo} alt="logo" className="logo" />
          </Link>
          <button className="close-btn" onClick={closeAll} aria-label="Close menu">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </button>
        </div>

        <nav className="mobile-menu-nav">
          <ul className="menu-wrap">
            {/* Root-only IV Therapy entry */}
            {stack.length === 0 && (
              <li className="menu-item">
                <div className="menu-single-item" onClick={() => goDeeper(ivTherapyMenu, 'IV Therapy')}>
                  <span>IV Therapy</span>
                  <MdOutlineChevronRight />
                </div>
              </li>
            )}

            {/* Back row when inside a submenu */}
            {stack.length > 0 && (
              <li className="menu-back" onClick={goBack}>
                <MdArrowBack />
                <span>{current.title}</span>
              </li>
            )}

            {current.items.map((item, i) => {
              // Group with children → drill down
              if (item.groupTitle && item.children) {
                return (
                  <li className="menu-item" key={`grp-${i}`}>
                    <div
                      className="menu-single-item"
                      onClick={() => goDeeper(item.children, item.groupTitle)}
                    >
                      <span>{item.groupTitle}</span>
                      <MdOutlineChevronRight />
                    </div>
                  </li>
                );
              }

              // Leaf → must have href
              if (!item?.href) {
                // Log and skip unknown / malformed items
                if (process.env.NODE_ENV !== 'production') {
                  console.warn('[MobileMenu] Missing href for item:', item);
                }
                return null;
              }

              return (
                <li className="menu-item" key={`leaf-${i}`}>
                  <Link className="menu-single-item" href={item.href} onClick={closeAll}>
                    <span>{item.label ?? item.title ?? 'Untitled'}</span>
                  </Link>
                </li>
              );
            })}

          </ul>
        </nav>
      </div>
    </>
  );
}
