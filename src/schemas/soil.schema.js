import {z} from 'zod'

export const createSoilSchema = z.object({
    apparent_density: z.string({}).optional(),
    real_density: z.string({}).optional(),
    relative_density: z.string({}).optional(),
    maximum_dry_density: z.string({}).optional(),
    compressive_strength: z.string({}).optional(),
    thermal_conductivity: z.string({}).optional(),
    liquid: z.string({}).optional(),
    plastic: z.string({}).optional(),
    silt: z.string({}).optional(),
    clay: z.string({}).optional(),
    gravel: z.string({}).optional(),
    sand: z.string({}).optional(),
    optimum_moisture_content: z.string({}).optional(),
    plasticity_index: z.string({}).optional(),
    grain_siz: z.string({}).optional(),
    water_content: z.string({}).optional(),
    color: z.string({}).optional(),
    tensile_strength: z.string({}).optional(),
    porosity: z.string({}).optional(),
    initial_moisture: z.string({}).optional(),
    earrin: z.string({}).optional(),
    ground_altitude: z.string({}).optional(),
    average_temperature: z.string({}).optional(),
    rainfall_regime: z.string({}).optional(),


    alkalinity_acidity: z.string({}).optional(),
    organic_material: z.string({}).optional(),
    total_phosphoru: z.string({}).optional(),
    extractable_sulfur: z.string({}).optional(),
    interchangeable_aluminum: z.string({}).optional(),
    electric_conductivity: z.string({}).optional(),
    exchangeable_calcium: z.string({}).optional(),
    exchangeable_magnesium: z.string({}).optional(),
    exchangeable_potassium: z.string({}).optional(),
    exchangeable_sodium: z.string({}).optional(),
    extractable_copper: z.string({}).optional(),
    removable_iron: z.string({}).optional(),
    extractable_manganese: z.string({}).optional(),
    extractable_zinc: z.string({}).optional(),
    boron: z.string({}).optional(),


    soil_organism: z.string({}).optional(),
    additional_remarks1: z.string({}).optional(),
    type_microbial_activity: z.string({}).optional(),
    intensity_activity: z.string({}).optional(),
    additional_remarks2: z.string({}).optional(),
    measurement_method1: z.string({}).optional(),
    measurement_results: z.string({}).optional(),
    additional_remarks3: z.string({}).optional(),
    macroinvertebrat: z.string({}).optional(),
    additional_remarks4: z.string({}).optional(),
    average_depth: z.string({}).optional(),
    measurement_method2: z.string({}).optional(),
    additional_remarks5: z.string({}).optional(),


    order: z.string({
        required_error: "order is required",
    }),
    suborder: z.string({
        required_error: "suborder is required",
    }),
    great_group: z.string({
        required_error: "great group is required",
    }),
    sub_group: z.string({
        required_error: "sub gruop is required",
    }),
    scientific_name: z.string({
        required_error: "scientific name is required",
    }),
})