import catVegetables from "@/assets/cat-vegetables.webp";
import catFruits from "@/assets/cat-fruits.webp";
import catSpices from "@/assets/cat-spices.webp";
import catRice from "@/assets/cat-rice.webp";
import catOilseeds from "@/assets/cat-oilseeds.webp";
import catGrains from "@/assets/cat-grains.webp";
import catOils from "@/assets/cat-oils.webp";

import freshOnions from "@/assets/productimage/fresh-onions.webp";
import tomatoes from "@/assets/productimage/tomato.webp";
import garlic from "@/assets/productimage/garlic.webp";
import greenChilli from "@/assets/productimage/greenchilli.webp";
import potatoes from "@/assets/productimage/potato.webp";
import drumstick from "@/assets/productimage/drumstick.webp";
import bitterGourd from "@/assets/productimage/bitter-gourd.webp";
import okra from "@/assets/productimage/okra.webp";


import carrot from "@/assets/productimage/carrot.webp";
import cucumber from "@/assets/productimage/cucumber.webp";
import brinjal from "@/assets/productimage/brinjal.webp";
import cauliflower from "@/assets/productimage/cauliflower.webp";
import ginger from "@/assets/productimage/ginger.webp";
import bottleGourd from "@/assets/productimage/bottle-gourd.webp";
import greenPeas from "@/assets/productimage/green-peas.webp";


import pineapple from "@/assets/productimage/pineapple.webp";
import lemon from "@/assets/productimage/lemon.webp";
import coconut from "@/assets/productimage/coconut.webp";
import apple from "@/assets/productimage/apple.webp";
import alphonsoMangoes from "@/assets/productimage/mangoes.webp";
import pomegranates from "@/assets/productimage/pomegranates.webp";
import bananas from "@/assets/productimage/banana.webp";
import grapes from "@/assets/productimage/grapas.webp";
import guava from "@/assets/productimage/guava.webp";
import papaya from "@/assets/productimage/papaya.webp";

import turmericPowder from "@/assets/productimage/turmericpowder.webp";
import redchilliPowder from "@/assets/productimage/redchillipowder.webp";
import redChilliPepper from "@/assets/productimage/redChilliPepper.webp";
import cuminSeeds from "@/assets/productimage/cuminseeds.webp";
import cuminPowder from "@/assets/productimage/cuminPowder.webp";
import blackPepper from "@/assets/productimage/blackpepper.webp";
import cloves from "@/assets/productimage/cloves.webp";
import cardamom from "@/assets/productimage/cardamom.webp";
import corianderSeeds from "@/assets/productimage/coriandersceeds.webp";
import fenugreekSeeds from "@/assets/productimage/fenugreekSeeds.webp";
import cinnamonSticks from "@/assets/productimage/cinnamonsticks.webp";
import nutmeg from "@/assets/productimage/nutmeg.webp";
import dryMangoPowder from "@/assets/productimage/dryMangoPowder.webp";
import gingerPowder from "@/assets/productimage/gingerPowder.webp";
import curryLeaves from "@/assets/productimage/curryLeaves.webp";
import tamarind from "@/assets/productimage/tamarind.webp";
import asafoetida from "@/assets/productimage/asafoetida.webp";
import spiceMixMasala from "@/assets/productimage/spiceMixMasala.webp";
import fennelSeeds from "@/assets/productimage/fennelSeed.webp";

import basmatiRice1 from "@/assets/productimage/basmatirice11.webp";
import basmatiRice2 from "@/assets/productimage/basmatirice1509.webp";
import basmatiRice3 from "@/assets/productimage/basmatibicepusa.webp";
import basmatiRice4 from "@/assets/productimage/basmatiricesela.webp";
import basmatiRice5 from "@/assets/productimage/basmatirice5.webp";
import basmatiRice6 from "@/assets/productimage/basmatirice6.webp";


import sesameSeedswhite from "@/assets/productimage/sesameseedswhite.webp";
import sesameSeedsblack from "@/assets/productimage/sesameseedsblack.webp";
import groundnutKernels from "@/assets/productimage/groundnutkernels.webp";
import mustardSeeds from "@/assets/productimage/mustardseeds.webp";
import nigerSeeds from "@/assets/productimage/nigerseeds.webp";
import sunflowerSeeds from "@/assets/productimage/sunflower-seeds.webp";


import wheat from "@/assets/productimage/wheat.webp";
import chickpeas from "@/assets/productimage/chickpeas-kabuli.webp";
import greenMung from "@/assets/productimage/green-mung-beans.webp";
import redLentils from "@/assets/productimage/red-lentils-masoor.webp";
import yellowLentils from "@/assets/productimage/yellow-lentils-toor.webp";
import millet from "@/assets/productimage/millet-bajra.webp";


import groundnutOil from "@/assets/productimage/groundnut-oil.webp";
import sesameOil from "@/assets/productimage/sesame-oil.webp";
import sunflowerOil from "@/assets/productimage/sunflower-oil.webp";
import mustardOil from "@/assets/productimage/mustardoil.webp";
import coconutOil from "@/assets/productimage/coconutoil.webp";


export interface ProductCategory {
  id: string;
  name: string;
  icon: string;
  image: string;
  description: string;
  products: ProductItem[];
}

export interface ProductItem {
  name: string;
  slug: string;
  image?: string;
  origin?: string;
  moisture?: string;
  packaging?: string;
  quality?: string;
  exportCountries?: string[];
  certifications?: string[];
  specifications?: Record<string, string>;
}

export const categories: ProductCategory[] = [
  {
    id: "fresh-vegetables",
    name: "Fresh Vegetables",
    icon: "Carrot",
    image: catVegetables,
    description: "Premium quality fresh vegetables sourced from India's finest farms, meeting international quality standards.",
    products: [
      { name: "Fresh Onions", slug: "fresh-onions", image: freshOnions, origin: "Maharashtra, India", moisture: "Max 5%", packaging: "Mesh Bags 5/10/25 Kg", quality: "Grade A Export", exportCountries: ["UAE", "Saudi Arabia", "Malaysia", "Singapore", "UK"], certifications: ["APEDA", "FSSAI", "Phytosanitary"], specifications: { Color: "Red / White", Size: "40-60mm / 60-80mm", "Shelf Life": "30-45 days" } },
      { name: "Tomatoes", slug: "tomatoes", image: tomatoes, origin: "Karnataka, India", moisture: "Max 6%", packaging: "Corrugated Boxes 5/10 Kg", quality: "Grade A", exportCountries: ["UAE", "Qatar", "Oman"], certifications: ["APEDA", "FSSAI"] },
      { name: "Garlic", slug: "garlic", image: garlic, origin: "Madhya Pradesh, India", moisture: "Max 5%", packaging: "Mesh Bags 10/20 Kg", quality: "Premium Export", exportCountries: ["UAE", "UK", "USA"], certifications: ["APEDA", "FSSAI", "ISO 22000"] },
      { name: "Green Chilli", slug: "green-chilli", image: greenChilli, origin: "Andhra Pradesh, India", packaging: "Corrugated Boxes 5 Kg", quality: "Grade A" },
      { name: "Potatoes", slug: "potatoes", image: potatoes, origin: "Uttar Pradesh, India", packaging: "Jute Bags 25/50 Kg", quality: "Export Quality" },
      { name: "Drumstick", slug: "drumstick", image: drumstick, origin: "Tamil Nadu, India", packaging: "Corrugated Boxes 5 Kg", quality: "Fresh Export" },
      { name: "Bitter Gourd", slug: "bitter-gourd", image: bitterGourd, origin: "Gujarat, India", packaging: "Boxes 5 Kg", quality: "Grade A" },
      { name: "Okra (Lady Finger)", slug: "okra", image: okra, origin: "Maharashtra, India", packaging: "Boxes 5 Kg", quality: "Export Quality" },
      {
        name: "Carrot",
        slug: "carrot",
        image: carrot,
        origin: "Punjab, India",
        moisture: "Max 5%",
        packaging: "Corrugated Boxes 5/10 Kg",
        quality: "Grade A Export",
        exportCountries: ["UAE", "UK", "Malaysia"],
        certifications: ["APEDA", "FSSAI"],
        specifications: {
          Color: "Orange / Red",
          Size: "15-25 cm",
          "Shelf Life": "20-30 days"
        }
      },
      {
        name: "Cucumber",
        slug: "cucumber",
        image: cucumber,
        origin: "Karnataka, India",
        moisture: "Max 6%",
        packaging: "Carton Boxes 5 Kg",
        quality: "Fresh Export",
        exportCountries: ["UAE", "Oman", "Qatar"],
        certifications: ["APEDA", "FSSAI"],
        specifications: {
          Color: "Dark Green",
          Size: "15-20 cm",
          "Shelf Life": "10-15 days"
        }
      },
      {
        name: "Brinjal (Eggplant)",
        slug: "brinjal",
        image: brinjal,
        origin: "West Bengal, India",
        packaging: "Boxes 5 Kg",
        quality: "Grade A",
        exportCountries: ["UAE", "Saudi Arabia"],
        certifications: ["APEDA"],
        specifications: {
          Color: "Purple / Green",
          Size: "Medium",
          "Shelf Life": "7-10 days"
        }
      },
      {
        name: "Cauliflower",
        slug: "cauliflower",
        image: cauliflower,
        origin: "Haryana, India",
        packaging: "Crates / Boxes 10 Kg",
        quality: "Export Quality",
        exportCountries: ["UAE", "Qatar"],
        certifications: ["APEDA", "FSSAI"],
        specifications: {
          Color: "White",
          Size: "Medium to Large",
          "Shelf Life": "7-12 days"
        }
      },
      {
        name: "Ginger",
        slug: "ginger",
        image: ginger,
        origin: "Kerala, India",
        moisture: "Max 10%",
        packaging: "Mesh Bags 10/25 Kg",
        quality: "Premium Export",
        exportCountries: ["UAE", "UK", "USA"],
        certifications: ["APEDA", "FSSAI", "ISO 22000"],
        specifications: {
          Color: "Light Brown",
          Size: "Medium",
          "Shelf Life": "45-60 days"
        }
      },
      {
        name: "Bottle Gourd",
        slug: "bottle-gourd",
        image: bottleGourd,
        origin: "Uttar Pradesh, India",
        packaging: "Boxes 5 Kg",
        quality: "Fresh Export",
        exportCountries: ["UAE", "Oman"],
        certifications: ["APEDA"],
        specifications: {
          Color: "Light Green",
          Size: "20-40 cm",
          "Shelf Life": "7-10 days"
        }
      },
      {
        name: "Green Peas",
        slug: "green-peas",
        image: greenPeas,
        origin: "Himachal Pradesh, India",
        packaging: "Frozen Packs / Bags",
        quality: "Premium Export",
        exportCountries: ["UAE", "UK"],
        certifications: ["APEDA", "FSSAI"],
        specifications: {
          Type: "Fresh / Frozen",
          Color: "Green",
          "Shelf Life": "6-12 months (Frozen)"
        }
      }
    ],
  },
  {
    id: "premium-fruits",
    name: "Premium Fruits",
    icon: "Apple",
    image: catFruits,
    description: "Handpicked premium fruits from tropical and subtropical regions of India.",
    products: [
      { name: "Alphonso Mangoes", slug: "alphonso-mangoes", image: alphonsoMangoes, origin: "Ratnagiri, India", quality: "Premium Export", exportCountries: ["USA", "UK", "UAE", "Japan"], certifications: ["APEDA", "GI Tag"] },
      { name: "Pomegranates", slug: "pomegranates", image: pomegranates, origin: "Maharashtra, India", quality: "Grade A Export" },
      { name: "Bananas", slug: "bananas", image: bananas, origin: "Tamil Nadu, India", quality: "Export Quality" },
      { name: "Grapes", slug: "grapes", image: grapes, origin: "Nashik, India", quality: "Premium Export", certifications: ["GlobalGAP"] },
      { name: "Guava", slug: "guava", image: guava, origin: "Uttar Pradesh, India", quality: "Grade A" },
      { name: "Papaya", slug: "papaya", image: papaya, origin: "Gujarat, India", quality: "Export Quality" },
      { name: "Pineapple", slug: "pineapple", image: pineapple, origin: "Kerala, India", quality: "Premium Export", exportCountries: ["UAE", "Qatar", "Saudi Arabia"], certifications: ["APEDA", "FSSAI"] },
      { name: "Lemon", slug: "lemon", image: lemon, origin: "Andhra Pradesh, India", quality: "Grade A Export", exportCountries: ["UAE", "Oman", "Malaysia"], certifications: ["APEDA"] },
      { name: "Coconut", slug: "coconut", image: coconut, origin: "Tamil Nadu, India", quality: "Export Quality", exportCountries: ["UAE" ], certifications: ["APEDA", "FSSAI"] },
       { name: "Mud  Apple", slug: "Apple", image: apple, origin: "Nashik, India", quality: "Export Quality", exportCountries: ["UK" ], certifications: ["APEDA", "FSSAI"] }
    ],
  },
  {
    id: "premium-spices",
    name: "Premium Spices",
    icon: "Flame",
    image: catSpices,
    description: "Aromatic Indian spices sourced directly from spice plantations, known worldwide for superior quality.",
    products: [
  {
    name: "Turmeric Powder",
    slug: "turmeric-powder",
    image: turmericPowder,
    origin: "Erode, Tamil Nadu",
    moisture: "Max 10%",
    packaging: "25 Kg PP Bags / Customized",
    quality: "High Curcumin (3%-5%)",
    exportCountries: ["USA", "UK", "Germany", "Japan"],
    certifications: ["FSSAI", "Spice Board", "ISO"],
    specifications: {
      Color: "Bright Yellow",
      Purity: "99%",
      "Shelf Life": "12 months"
    }
  },
  {
    name: "Red Chilli Powder",
    slug: "red-chilli-powder",
    image: redchilliPowder,
    origin: "Guntur, Andhra Pradesh",
    moisture: "Max 12%",
    packaging: "25 Kg Bags",
    quality: "ASTA 80-120",
    exportCountries: ["USA", "UK", "Japan"],
    certifications: ["Spice Board", "FSSAI"],
    specifications: {
      Color: "Deep Red",
      Pungency: "High",
      "Shelf Life": "12 months"
    }
  },
  {
    name: "Red Chilli Pepper",
    slug: "red-chilli-pepper",
    image: redChilliPepper,
    origin: "Guntur, Andhra Pradesh",
    moisture: "Max 10%",
    packaging: "Jute / PP Bags",
    quality: "Premium Dry Chilli",
    exportCountries: ["USA"],
    certifications: ["Spice Board"],
    specifications: {
      Size: "Medium to Long",
      Color: "Bright Red"
    }
  },
  {
    name: "Cumin Seeds",
    slug: "cumin-seeds",
    image: cuminSeeds,
    origin: "Gujarat, India",
    moisture: "Max 10%",
    packaging: "25/50 Kg Bags",
    quality: "Singapore/Europe Quality",
    exportCountries: ["UAE", "USA", "UK"],
    certifications: ["FSSAI", "ISO"],
    specifications: {
      Purity: "99%",
      Color: "Brown"
    }
  },
  {
    name: "Cumin Powder",
    slug: "cumin-powder",
    image: cuminPowder,
    origin: "Gujarat, India",
    moisture: "Max 8%",
    packaging: "25 Kg Bags",
    quality: "Premium Ground",
    exportCountries: ["UAE", "UK"],
    certifications: ["FSSAI"],
    specifications: {
      Texture: "Fine Powder"
    }
  },
  {
    name: "Black Pepper",
    slug: "black-pepper",
    image: blackPepper,
    origin: "Kerala, India",
    moisture: "Max 12%",
    packaging: "25/50 Kg Bags",
    quality: "ASTA Grade",
    exportCountries: ["USA", "Germany"],
    certifications: ["Spice Board"],
    specifications: {
      Size: "Bold",
      Color: "Black"
    }
  },
  {
    name: "Green Cardamom",
    slug: "green-cardamom",
    image: cardamom,
    origin: "Kerala, India",
    packaging: "5/10 Kg Boxes",
    quality: "Bold Green",
    exportCountries: ["UAE", "Saudi Arabia"],
    certifications: ["Spice Board"],
    specifications: {
      Size: "6-8 mm",
      Color: "Green"
    }
  },
  {
    name: "Cloves",
    slug: "cloves",
    image: cloves,
    origin: "Kerala, India",
    packaging: "25 Kg Bags",
    quality: "Handpicked Premium",
    exportCountries: ["USA", "UK"],
    certifications: ["FSSAI"],
    specifications: {
      Color: "Dark Brown"
    }
  },
  {
    name: "Coriander Seeds",
    slug: "coriander-seeds",
    image: corianderSeeds,
    origin: "Rajasthan, India",
    packaging: "25 Kg Bags",
    quality: "Eagle Quality",
    exportCountries: ["Malaysia"],
    certifications: ["FSSAI"],
    specifications: {
      Color: "Light Brown"
    }
  },
  {
    name: "Fenugreek Seeds",
    slug: "fenugreek-seeds",
    image: fenugreekSeeds,
    origin: "Rajasthan, India",
    packaging: "25 Kg Bags",
    quality: "Sortex Clean",
    exportCountries: ["UAE"],
    certifications: ["FSSAI"],
    specifications: {
      Color: "Yellow"
    }
  },
  {
    name: "Fennel Seeds",
    slug: "fennel-seeds",
    image: fennelSeeds,
    origin: "Rajasthan, India",
    packaging: "25 Kg Bags",
    quality: "Premium Green",
    exportCountries: ["USA", "UK"],
    certifications: ["FSSAI"],
    specifications: {
      Color: "Green"
    }
  },
  {
    name: "Cinnamon Sticks",
    slug: "cinnamon-sticks",
    image: cinnamonSticks,
    origin: "Kerala, India",
    packaging: "10/25 Kg Boxes",
    quality: "Premium Grade",
    exportCountries: ["USA", "Germany"],
    certifications: ["Spice Board"],
    specifications: {
      Type: "Ceylon",
      Color: "Brown"
    }
  },
  {
    name: "Nutmeg",
    slug: "nutmeg",
    image: nutmeg,
    origin: "Kerala, India",
    packaging: "25 Kg Bags",
    quality: "Export Quality",
    exportCountries: ["UAE", "USA"],
    certifications: ["FSSAI"],
    specifications: {
      Size: "Medium"
    }
  },
  {
    name: "Dry Mango Powder",
    slug: "dry-mango-powder",
    image: dryMangoPowder,
    origin: "India",
    packaging: "25 Kg Bags",
    quality: "Amchur Premium",
    exportCountries: ["UAE", "UK"],
    certifications: ["FSSAI"],
    specifications: {
      Taste: "Tangy"
    }
  },
  {
    name: "Ginger Powder",
    slug: "ginger-powder",
    image: gingerPowder,
    origin: "Kerala, India",
    packaging: "25 Kg Bags",
    quality: "Fine Ground",
    exportCountries: ["USA", "Germany"],
    certifications: ["FSSAI"],
    specifications: {
      Texture: "Fine"
    }
  },
  {
    name: "Curry Leaves",
    slug: "curry-leaves",
    image: curryLeaves,
    origin: "South India",
    packaging: "Fresh Packs",
    quality: "Aromatic Premium",
    exportCountries: ["UAE", "UK"],
    certifications: ["FSSAI"],
    specifications: {
      Type: "Fresh / Dried"
    }
  },
  {
    name: "Tamarind",
    slug: "tamarind",
    image: tamarind,
    origin: "Tamil Nadu, India",
    packaging: "30 Kg Blocks",
    quality: "Seedless Export",
    exportCountries: ["Malaysia", "Singapore"],
    certifications: ["FSSAI"],
    specifications: {
      Taste: "Sour"
    }
  },
  {
    name: "Asafoetida",
    slug: "asafoetida",
    image: asafoetida,
    origin: "India",
    packaging: "1 Kg / 5 Kg Packs",
    quality: "Strong Aroma",
    exportCountries: ["USA", "UK"],
    certifications: ["FSSAI"],
    specifications: {
      Purity: "High"
    }
  },
  {
    name: "All Spice Mix Masala",
    slug: "all-spice-mix-masala",
    image: spiceMixMasala,
    origin: "India",
    packaging: "Custom Packs",
    quality: "Premium Blend",
    exportCountries: ["UK", "UAE"],
    certifications: ["FSSAI"],
    specifications: {
      Blend: "Multi Spice"
    }
  }
]
  },
  {
    id: "basmati-rice",
    name: "Basmati & Non-Basmati Rice",
    icon: "Wheat",
    image: catRice,
    description: "Finest Basmati and Non-Basmati rice varieties from the foothills of the Himalayas.",
    products: [
      { name: "1121 Basmati Rice", slug: "1121-basmati", image: basmatiRice1, origin: "Punjab, India", moisture: "Max 12.5%", quality: "Extra Long Grain", exportCountries: ["UAE", "Saudi Arabia", "Iraq", "Iran", "Yemen"], certifications: ["APEDA", "BIS", "FSSAI"], specifications: { Length: "8.30mm+", "Broken %": "Max 2%", "Average Grain Length": "8.35mm" } },
      { name: "1509 Basmati Rice", slug: "1509-basmati", image: basmatiRice2, origin: "Haryana, India", quality: "Long Grain" },
      { name: "Pusa Basmati Rice", slug: "pusa-basmati", image: basmatiRice3, origin: "Punjab, India", quality: "Aromatic Long Grain" },
      { name: "Sella Basmati Rice", slug: "sella-basmati", image: basmatiRice4, origin: "Punjab, India", quality: "Golden Parboiled" },
      { name: "IR-64 Non-Basmati", slug: "ir64-rice", image: basmatiRice5, origin: "Andhra Pradesh, India", quality: "Medium Grain" },
      { name: "Sona Masoori Rice", slug: "sona-masoori", image: basmatiRice6, origin: "Karnataka, India", quality: "Premium Short Grain" },
    ],
  },
  {
    id: "oil-seeds",
    name: "Oil Seeds",
    icon: "CircleDot",
    image: catOilseeds,
    description: "High-quality oil seeds meeting international food safety and quality standards.",
    products: [
      { name: "Sesame Seeds (White)", slug: "white-sesame", image: sesameSeedswhite, origin: "Gujarat, India", quality: "99.95% Purity", exportCountries: ["Japan", "Korea", "China", "USA"], certifications: ["FSSAI", "ISO 22000"] },
      { name: "Sesame Seeds (Black)", slug: "black-sesame", image: sesameSeedsblack, origin: "Rajasthan, India", quality: "99.90% Purity" },
      { name: "Groundnut Kernels", slug: "groundnut-kernels", image: groundnutKernels, origin: "Gujarat, India", quality: "Bold / Java" },
      { name: "Mustard Seeds", slug: "mustard-seeds", image: mustardSeeds, origin: "Rajasthan, India", quality: "Sortex Clean" },
      { name: "Niger Seeds", slug: "niger-seeds", image: nigerSeeds, origin: "Ethiopia", quality: "Export Grade" },
      { name: "Sunflower Seeds", slug: "sunflower-seeds", image: sunflowerSeeds, origin: "Karnataka, India", quality: "Confectionery Grade" },
    ],
  },
  {
    id: "grains",
    name: "Grains & Pulses",
    icon: "Grip",
    image: catGrains,
    description: "Nutrient-rich grains and pulses from India's agricultural heartland.",
    products: [
      { name: "Wheat", slug: "wheat", image: wheat, origin: "Madhya Pradesh, India", quality: "Milling Quality" },
      { name: "Chickpeas (Kabuli)", slug: "kabuli-chickpeas", image: chickpeas, origin: "Rajasthan, India", quality: "9mm / 10mm / 12mm" },
      { name: "Green Mung Beans", slug: "green-mung", image: greenMung, origin: "Rajasthan, India", quality: "Machine Clean" },
      { name: "Red Lentils (Masoor)", slug: "red-lentils", image: redLentils, origin: "Madhya Pradesh, India", quality: "Football / Split" },
      { name: "Yellow Lentils (Toor)", slug: "toor-dal", image: yellowLentils, origin: "Maharashtra, India", quality: "Polished / Oily" },
      { name: "Millet (Bajra)", slug: "bajra-millet", image: millet, origin: "Rajasthan, India", quality: "Sortex Clean" },
    ],
  },
  {
    id: "oils",
    name: "Edible Oils",
    icon: "Droplets",
    image: catOils,
    description: "Pure and refined edible oils for culinary and industrial applications.",
    products: [
      { name: "Groundnut Oil", slug: "groundnut-oil", image: groundnutOil, origin: "Gujarat, India", quality: "Cold Pressed / Refined" },
      { name: "Sesame Oil", slug: "sesame-oil", image: sesameOil, origin: "Tamil Nadu, India", quality: "Cold Pressed" },
      { name: "Sunflower Oil", slug: "sunflower-oil", image: sunflowerOil, origin: "Karnataka, India", quality: "Refined" },
      { name: "Mustard Oil", slug: "mustard-oil", image: mustardOil, origin: "Rajasthan, India", quality: "Kachi Ghani" },
      { name: "Coconut Oil", slug: "coconut-oil", image: coconutOil, origin: "Kerala, India", quality: "Virgin / Refined" },
    ],
  },
];

export const getCategory = (id: string) => categories.find((c) => c.id === id);
export const getProduct = (categoryId: string, slug: string) => {
  const cat = getCategory(categoryId);
  return cat?.products.find((p) => p.slug === slug);
};







