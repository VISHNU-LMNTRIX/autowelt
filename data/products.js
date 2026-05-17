export const productCategories = [

    {
        id: "paint-care",
        title: "Paint Care",
        countLabel: "12 Formulations",
        image: "assets/images/polishing.png"
    },

    {
        id: "interior-care",
        title: "Interior Care",
        countLabel: "8 Formulations",
        image: "assets/images/interior_detailing.png"
    },

    {
        id: "tools-accessories",
        title: "Tools & Accs",
        countLabel: "Pro Grade",
        image: "assets/images/paint_protection.png"
    },

    {
        id: "coatings",
        title: "Coatings",
        countLabel: "6 Systems",
        image: "assets/images/ceramic_coating.png"
    },

    {
        id: "maintenance",
        title: "Maintenance",
        countLabel: "Studio Safe",
        image: "assets/images/blog/blog-1.png"
    },

    {
        id: "studio-gear",
        title: "Studio Gear",
        countLabel: "Installer Grade",
        image: "assets/images/blog/blog-2.png"
    }

];


export const products = [

    {
        id: "aw-01",
        category: "paint-care",
        code: "AW:01",
        name: "Ceramic Matrix",
        subtitle: "AW:01 Nano-Coating",
        label: "Professional Grade Formulation",
        description:
            "An ultra-concentrated SiO2 formulation engineered to bond molecularly with clear coat systems. It creates a sacrificial layer with 9H hardness, gloss enhancement, and extreme hydrophobic behavior.",
        summary:
            "Advanced SiO2 formulation providing 9H hardness and long-term gloss protection.",
        shape: "bottle-tall",
        specs: ["Hardness: 9H", "Durability: 5 Years+", "Contact Angle: 115°"],
        application: ["Layering: 1-2 Coats", "Cure Time: 24h Initial", "Flash Time: 1-3 Mins"],
        metrics: [
            { label: "Gloss Enhancement", value: 98 },
            { label: "Hydrophobicity", value: 95 }
        ]
    },

    {
        id: "aw-02",
        category: "paint-care",
        code: "AW:02",
        name: "Compound Cut",
        subtitle: "Heavy Correction Compound",
        label: "Defect Removal System",
        description:
            "A controlled-cut compound built for hard clear coats. It removes severe swirls and oxidation while leaving a workable finish for refinement.",
        summary:
            "Heavy defect removal compound engineered for hard clear coats.",
        shape: "bottle-medium",
        specs: ["Cut Level: 9/10", "Dusting: Low", "Finish: Refinable"],
        application: ["Pad: Wool or Microfiber", "Speed: Medium", "Work Time: Extended"],
        metrics: [
            { label: "Cutting Power", value: 92 },
            { label: "Finish Quality", value: 78 }
        ]
    },

    {
        id: "aw-03",
        category: "paint-care",
        code: "AW:03",
        name: "Finishing Polish",
        subtitle: "Jeweling Polish",
        label: "Gloss Refinement",
        description:
            "A low-dust jeweling polish designed to extract maximum clarity before coatings or sealants. Ideal for black and deep metallic finishes.",
        summary:
            "Jeweling polish designed to extract maximum gloss and clarity.",
        shape: "bottle-round",
        specs: ["Cut Level: 2/10", "Gloss: High", "Residue: Minimal"],
        application: ["Pad: Soft Foam", "Speed: Low-Medium", "Work Time: Long"],
        metrics: [
            { label: "Gloss Enhancement", value: 96 },
            { label: "Clarity", value: 94 }
        ]
    },

    {
        id: "aw-04",
        category: "paint-care",
        code: "AW:04",
        name: "Panel Prep",
        subtitle: "Surface Decontamination",
        label: "Bonding Preparation",
        description:
            "An alcohol-based final wipe that strips polishing oils and leaves the panel surgically clean for coating, sealant, or film application.",
        summary:
            "Alcohol-based solution to strip polishing oils before protection.",
        shape: "jar-wide",
        specs: ["Residue: Zero", "Flash: Fast", "Use: Final Wipe"],
        application: ["Towel: Plush Microfiber", "Passes: 1-2", "Ventilation: Required"],
        metrics: [
            { label: "Bond Readiness", value: 97 },
            { label: "Evaporation", value: 90 }
        ]
    },

    {
        id: "aw-05",
        category: "coatings",
        code: "AW:05",
        name: "Glass Shield",
        subtitle: "Hydrophobic Glass Coat",
        label: "Visibility Protection",
        description:
            "A dedicated windshield and glass coating for monsoon visibility. It rejects water, grime, and mineral spotting without optical haze.",
        summary:
            "Hydrophobic glass coating tuned for Kerala monsoon visibility.",
        shape: "bottle-small",
        specs: ["Durability: 12 Months", "Clarity: Optical", "Repellency: High"],
        application: ["Layering: 1 Coat", "Cure Time: 2h", "Prep: Degrease Glass"],
        metrics: [
            { label: "Water Rejection", value: 93 },
            { label: "Optical Clarity", value: 98 }
        ]
    },

    {
        id: "aw-06",
        category: "interior-care",
        code: "AW:06",
        name: "Leather Serum",
        subtitle: "Matte Interior Conditioner",
        label: "Cabin Preservation",
        description:
            "A low-sheen conditioner for modern automotive leather. It restores suppleness without the shiny residue common in generic dressings.",
        summary:
            "Matte leather conditioner for luxury automotive interiors.",
        shape: "bottle-medium",
        specs: ["Finish: Matte", "UV Guard: Yes", "Scent: Neutral"],
        application: ["Applicator: Foam", "Dwell: 5 Mins", "Buff: Dry Cloth"],
        metrics: [
            { label: "Material Safety", value: 96 },
            { label: "Tactile Finish", value: 94 }
        ]
    },

    {
        id: "aw-07",
        category: "interior-care",
        code: "AW:07",
        name: "Alcantara Lift",
        subtitle: "Suede Textile Cleaner",
        label: "Delicate Surface Care",
        description:
            "A low-moisture cleaner for Alcantara, suede, and technical textiles. It lifts oils and soil while preserving nap and texture.",
        summary:
            "Low-moisture cleaner for Alcantara and technical textiles.",
        shape: "jar-wide",
        specs: ["Moisture: Low", "Residue: None", "Texture: Preserved"],
        application: ["Brush: Soft", "Dwell: 2 Mins", "Dry: Airflow"],
        metrics: [
            { label: "Soil Lift", value: 88 },
            { label: "Texture Retention", value: 97 }
        ]
    },

    {
        id: "aw-08",
        category: "tools-accessories",
        code: "AW:08",
        name: "Edge Brush Set",
        subtitle: "Surgical Detailing Brushes",
        label: "Precision Tooling",
        description:
            "A calibrated brush trio for badges, vents, seams, wheels, and engine bay details. Chemical-resistant fibers hold shape through repeated use.",
        summary:
            "Chemical-resistant brushes for intricate exterior and cabin areas.",
        shape: "tool-bar",
        specs: ["Fibers: Synthetic", "Handles: Anodized", "Sizes: 3"],
        application: ["Use: Wet or Dry", "Rinse: Warm Water", "Storage: Air Dry"],
        metrics: [
            { label: "Reach", value: 91 },
            { label: "Durability", value: 93 }
        ]
    },

    {
        id: "aw-09",
        category: "maintenance",
        code: "AW:09",
        name: "Maintenance Wash",
        subtitle: "pH-Neutral Shampoo",
        label: "Coating Safe Care",
        description:
            "A pH-neutral wash concentrate that preserves coating behavior while removing traffic film. Designed for weekly maintenance without stripping protection.",
        summary:
            "pH-neutral shampoo for coated and protected vehicles.",
        shape: "bottle-tall",
        specs: ["pH: Neutral", "Foam: Dense", "Coating Safe: Yes"],
        application: ["Dilution: 1:400", "Mitt: Microfiber", "Rinse: Thorough"],
        metrics: [
            { label: "Lubricity", value: 92 },
            { label: "Coating Safety", value: 99 }
        ]
    },

    {
        id: "aw-10",
        category: "studio-gear",
        code: "AW:10",
        name: "Inspection Light",
        subtitle: "Color-True Defect Lamp",
        label: "Studio Hardware",
        description:
            "A compact inspection lamp calibrated for swirl detection, sanding mark review, and coating high-spot control.",
        summary:
            "Color-true inspection lamp for paint correction and coating work.",
        shape: "tool-bar",
        specs: ["CRI: 96+", "Modes: 3", "Runtime: 6h"],
        application: ["Distance: 40-70 cm", "Angle: Low Sweep", "Use: Panel Review"],
        metrics: [
            { label: "Defect Visibility", value: 95 },
            { label: "Color Accuracy", value: 96 }
        ]
    }

];
