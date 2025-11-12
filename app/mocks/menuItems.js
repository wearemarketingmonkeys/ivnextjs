export const menuItems = [
    { 
      label: "IV Therapy", 
      modal: true,
    },
    {
      label: "Concerns & Treatments",
      submenuWrapper: [
        {
          submenuWrap: [
            {
              submenuTitle: "Hair",
              submenu: [
                { label: "PRP", to: "/aesthetic/prp" },
                { label: "Skin Booster", to: "/aesthetic/skin-boosters" },
                { label: "Microneedling", to: "/aesthetic/microneedling" },
                { label: "Scalp Hydrafacial", to: "/aesthetic/hydra-facial" },
                { label: "Growth Factors", to: "/aesthetic/prp" },
                { label: "Wrinkle relaxers", to: "/aesthetic/anti-aging" },
              ],
            },
          ],
        },
        {
          submenuWrap: [
            {
              submenuTitle: "Face",
              submenu: [
                { label: "Wrinkle relaxers", to: "/aesthetic/anti-aging" },
                { label: "Morpheus8® – Microneedling with Radio Frequency", to: "/morpheus" },
                { label: "Upper/ Lower/ Full Face Fillers", to: "/aesthetic/face-fillers" },
                { label: "Lip Fillers", to: "/aesthetic/lip-fillers" },
                { label: "HIFU Treatment", to: "/aesthetic/hifu-treatment" },
                { label: "PRP", to: "/aesthetic/prp" },
                { label: "Microneedling", to: "/aesthetic/microneedling" },
                { label: "Chemical Peel", to: "/aesthetic/chemical-peel" },
                { label: "Skin Boosters", to: "/aesthetic/skin-boosters" },
                { label: "Soprano Titanium Korean Laser Hair Removal", to: "/laser-hair-removal" },
                { label: "Hydrafacial", to: "/aesthetic/hydra-facial" },
                { label: "Oxygeneo Facial", to: "/aesthetic/oxygeneo-facial" },
                { label: "Collagen Threads", to: "/aesthetic/hydra-facial" },
                { label: "Collagen stimulation (Sculptra & Radiesse)", to: "/aesthetic/collagen-stimulation" },
                { label: "Lipozero", to: "/aesthetic/lipo-zero" },
                { label: "Liposculpt", to: "/aesthetic/lipo-sculpt" },
                { label: "Forma Hollywood Lift", to: "/morpheus" },
                { label: "Soprano Titanium Korean Facelift", to: "/laser-hair-removal" },
                { label: "Tear Trough Fillers", to: "/aesthetic/face-fillers" },
              ],
            },
          ],
        },
        {
          submenuWrap: [
            {
              submenuTitle: "Body",
              submenu: [
                { label: "Wrinkle relaxers", to: "/aesthetic/anti-aging" },
                { label: "Morpheus8® – Microneedling with Radio Frequency", to: "/morpheus" },
                { label: "Body Fillers", to: "/aesthetic/body-fillers" },
                { label: "HIFU Treatment", to: "/aesthetic/hifu-treatment" },
                { label: "PRP", to: "/aesthetic/prp" },
                { label: "Chemical Peel", to: "/aesthetic/chemical-peel" },
                { label: "Skin Boosters", to: "/aesthetic/skin-boosters" },
                { label: "Soprano Titanium Korean Laser Hair Removal", to: "/laser-hair-removal" },
                { label: "Collagen stimulation (Sculptra & Radiesse)", to: "/aesthetic/collagen-stimulation" },
                { label: "Lipozero", to: "/aesthetic/lipo-zero" },
                { label: "Liposculpt", to: "/aesthetic/lipo-sculpt" },
              ],
            },
          ],
        },
        {
          submenuWrap: [
            {
              submenuTitle: "Male Wellness",
              submenu: [
                { label: "P-Shot Treatment", to: "/aesthetic/p-shot-treatment" },
                { label: "Performance support", to: "/iv-therapy/drips/performance-support" },
                { label: "NAD+", to: "/iv-therapy/drips/nad-plus" },
              ],
            },
          ],
        },
        {
          submenuWrap: [
            {
              submenuTitle: "Female Wellness",
              submenu: [
                { label: "O-Shot Treatment", to: "/aesthetic/o-shot-treatment" },
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
                { label: "Meet Our Doctor", to: "/meet-our-doctor" },
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