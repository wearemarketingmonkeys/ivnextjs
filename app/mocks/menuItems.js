export const menuItems = [
    { 
      label: "IV Therapy", 
      modal: true,
    },
    {
      label: "Concerns & Treatments",
      to: "/aesthetic",
      submenuWrapper: [
        {
          submenuWrap: [
            {
              submenuTitle: "Elasticity",
              submenu: [
                { label: "Morpheus8® – Microneedling with Radio Frequency", to: "/morpheus" },
                { label: "Forma", to: "/morpheus" },
                { label: "Skin Booster", to: "/aesthetic/skin-boosters" },
                { label: "Mesotherapy", to: "/aesthetic/mesotherapy" },
                { label: "Collagen stimulation (Sculptra & Radiesse)", to: "/aesthetic/collagen-stimulation" },
              ],
            },
            {
              submenuTitle: "Volume and structure",
              submenu: [
                { label: "Fillers", to: "/aesthetic/dermal-fillers" },
                {
                  label: "Collagen stimulation (Sculptra & Radiesse)",
                  to: "/aesthetic/collagen-stimulation",
                },
              ],
            },
            {
              submenuTitle: "Hair",
              submenu: [
                { label: "PRP Hair Therapy", to: "/aesthetic/prp" },
                {
                  label: "Soprano Titanium Laser Hair Removal",
                  to: "/laser-hair-removal",
                },
                { label: "Scalp Hydrafacial", to: "/aesthetic/hydra-facial" },
                { label: "Growth Factors", to: "/aesthetic/prp" },
                { label: "Hairfall Defense", to: "/iv-therapy/drips/hairfall-defense" },
                { label: "Exosomes", to: "/aesthetic/skin-boosters" },
              ],
            },
            {
              submenuTitle: "Active acne",
              submenu: [
                { label: "Chemical Peel", to: "/aesthetic/chemical-peel" },
              ],
            },
          ],
        },
        {
          submenuWrap: [
            {
              submenuTitle: "Wrinkles and fine lines",
              submenu: [
                { label: "Wrinkle relaxers", to: "/aesthetic/anti-aging" },
                { label: "Morpheus8® – Microneedling with Radio Frequency", to: "/morpheus" },
                { label: "Fillers", to: "/aesthetic/dermal-fillers" },
                { label: "PRP", to: "/aesthetic/prp" },
                { label: "Mesotherapy", to: "/aesthetic/mesotherapy" },
                { label: "Chemical Peel", to: "/aesthetic/chemical-peel" },
                { label: "Skin Boosters", to: "/aesthetic/skin-boosters" },
                { label: "Collagen stimulation (Sculptra & Radiesse)", to: "/aesthetic/collagen-stimulation" },
              ],
            },
            // {
            //   submenuTitle: "Redness",
            //   submenu: [
            //     { label: "Cosmelan Chemical Peel", to: "/aesthetic/chemical-peel" },
            //   ],
            // },
            {
              submenuTitle: "Excessive sweat",
              submenu: [
                { label: "Wrinkle relaxers", to: "/aesthetic/anti-aging" },
              ],
            },
            {
              submenuTitle: "Hydration",
              submenu: [
                { label: "Signature Hydrafacial", to: "/aesthetic/hydra-facial" },
                { label: "Skin Boosters", to: "/aesthetic/skin-boosters" },
                { label: "Collagen Threads", to: "/aesthetic/hydra-facial" },
                { label: "Fillers", to: "/aesthetic/dermal-fillers" },
                { label: "IV Therapy", to: "/iv-therapy/drips" },
              ],
            },
            {
              submenuTitle: "Dullness",
              submenu: [
                { label: "Signature Hydrafacial", to: "/aesthetic/hydra-facial" },
                { label: "Mesotherapy", to: "/aesthetic/mesotherapy" },
                { label: "Skin Boosters", to: "/aesthetic/skin-boosters" },
                { label: "Glow Hub", to: "/iv-therapy/drips/glow-hub" },
                { label: "IV Therapy", to: "/iv-therapy/drips" },
                { label: "Cold Peel", to: "/aesthetic/chemical-peel" },
              ],
            },
          ],
        },
        {
          submenuWrap: [
            {
              submenuTitle: "Texture and pigmentation",
              submenu: [
                { label: "Chemical Peel", to: "/aesthetic/chemical-peel" },
                { label: "PRP", to: "/aesthetic/prp" },
                { label: "Mesotherapy", to: "/aesthetic/mesotherapy" },
                { label: "Skin Boosters", to: "/aesthetic/skin-boosters" },
                { label: "Medical Grade Skincare", to: "/aesthetic/medical-grade-skincare" },
                { label: "Glow Hub", to: "/iv-therapy/drips/glow-hub" },
                { label: "Beauty Hub", to: "/iv-therapy/drips/beauty-hub" },
              ],
            },
            {
              submenuTitle: "Scars and stretch marks",
              submenu: [
                { label: "Morpheus8® – Microneedling with Radio Frequency", to: "/morpheus" },
                { label: "Chemical Peel", to: "/aesthetic/chemical-peel" },
                { label: "PRP", to: "/aesthetic/prp" },
              ],
            },
            {
              submenuTitle: "Bruxism",
              submenu: [
                { label: "Wrinkle relaxers", to: "/aesthetic/anti-aging" },
              ],
            },
            {
              submenuTitle: "Body contouring (Fat melting)",
              submenu: [
                { label: "Morpheus8® – Microneedling with Radio Frequency", to: "/morpheus" },
                { label: "Lipozero", to: "/aesthetic/lipo-sculpt" },
                { label: "Liposculpt", to: "/aesthetic/lipo-sculpt" },
                { label: "Fitness Hub", to: "/iv-therapy/drips/fitness-hub" },
              ],
            },
            {
              submenuTitle: "Aging hands",
              submenu: [
                { label: "Hand Fillers", to: "/aesthetic/dermal-fillers" },
                { label: "Skin Boosters", to: "/aesthetic/skin-boosters" },
                { label: "PRP", to: "/aesthetic/prp" },
                { label: "Radiesse", to: "/aesthetic/collagen-stimulation" },
              ],
            },
          ],
        },
        {
          submenuWrap: [
            {
              submenuTitle: "Non surgical facelift",
              submenu: [
                { label: "Forma Hollywood Lift", to: "/morpheus" },
                { label: "Soprano Titanium Korean Facelift add to soprano", to: "/laser-hair-removal" },
                { label: "Lower face Wrinkle Relaxers", to: "/aesthetic/anti-aging" },
                { label: "Nefertiti Lift", to: "/aesthetic/anti-aging" },
              ],
            },
            {
              submenuTitle: "Enlarged pores",
              submenu: [
                { label: "Morpheus8®", to: "/morpheus" },
                { label: "Chemical Peels", to: "/aesthetic/chemical-peel" },
                { label: "Microneedling", to: "/aesthetic/mesotherapy" },
                { label: "Medical Grade Skincare", to: "/aesthetic/medical-grade-skincare" },
              ],
            },
            {
              submenuTitle: "Under-eye concerns (Dark Circles, Puffiness)",
              submenu: [
                { label: "PRP", to: "/aesthetic/prp" },
                { label: "Tear Trough Fillers", to: "/aesthetic/dermal-fillers" },
                { label: "Skin Boosters", to: "/aesthetic/skin-boosters" },
                { label: "Mesotherapy (under-eye formula)", to: "/aesthetic/mesotherapy" },
              ],
            },
            {
              submenuTitle: "Aging hands",
              submenu: [
                { label: "Hand Fillers", to: "/aesthetic/dermal-fillers" },
                { label: "Skin Boosters", to: "/aesthetic/skin-boosters" },
                { label: "PRP", to: "/aesthetic/prp" },
                { label: "Radiesse", to: "/aesthetic/collagen-stimulation" },
              ],
            },
          ],
        },
      ],
    },
    {
      label: "Offers",
      to: "/#specialoffers",
    },
    {
      label: "Discover",
      submenuWrapper: [
        {
          submenuWrap: [
            {
              submenuTitle: "The IV Wellness",
              submenu: [
                { label: "About us", to: "/about-us" },
                { label: "Packages", to: "/packages" },
                { label: "Blogs", to: "/blogs" },
                { label: "Contact us", to: "/contact-us" },
                { label: "Careers", to: "/career" },
              ],
            },
          ],
        }
      ]
    },
  ];