import mongoose from "mongoose";

const soilSchema = new mongoose.Schema({
    //Phisical Properties
    apparent_density: {type: String},
    real_density: {type: String},
    relative_density: {type: String},
    maximum_dry_density: {type: String},
    compressive_strength: {type: String},
    thermal_conductivity: {type: String},
    liquid: {type: String},
    plastic: {type: String},
    silt: {type: String},
    clay: {type: String},
    gravel: {type: String},
    sand: {type: String},
    optimum_moisture_content: {type: String},
    plasticity_index: {type: String},
    grain_size: {type: String},
    water_content: {type: String},
    color: {type: String},
    tensile_strength: {type: String},
    porosity: {type: String},
    initial_moisture: {type: String},
    earring: {type: String},
    ground_altitude: {type: String},
    average_temperature: {type: String},
    rainfall_regime: {type: String},

    //Chemical Properties
    alkalinity_acidity: {type: String},
    organic_material: {type: String},
    total_phosphorus: {type: String},
    extractable_sulfur: {type: String},
    interchangeable_aluminum: {type: String},
    electric_conductivity: {type: String},
    exchangeable_calcium: {type: String},
    exchangeable_magnesium: {type: String},
    exchangeable_potassium: {type: String},
    exchangeable_sodium: {type: String},
    extractable_copper: {type: String},
    removable_iron: {type: String},
    extractable_manganese: {type: String},
    extractable_zinc: {type: String},
    boron: {type: String},

    //Biological Properties
    soil_organism:{type: String},
    additional_remarks1:{type: String},
    type_microbial_activity:{type: String},
    intensity_activity:{type: String},
    additional_remarks2:{type: String},
    measurement_method1:{type: String},
    measurement_results:{type: String},
    additional_remarks3:{type: String},
    macroinvertebrates:{type: String},
    additional_remarks4:{type: String},
    average_depth:{type: String},
    measurement_method2:{type: String},
    additional_remarks5:{type: String},

    //Registration Completion
    order:{type: String, required: true},
    suborder:{type: String, required: true},
    great_group:{type: String, required: true},
    sub_group:{type: String, required: true},
    scientific_name:{type: String, required: true},

    //user
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true
})

export default mongoose.model('Soil', soilSchema);