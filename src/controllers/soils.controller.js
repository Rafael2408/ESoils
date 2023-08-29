import Soil from '../models/soil.model.js'

export const getSoils = async (req, res) => {
    const soils = await Soil.find({
        user: req.user.id
    }).populate('user')
    res.json(soils)
}

export const createSoil = async (req, res) => {
    const {
        apparent_density,
        real_density,
        relative_density,
        maximum_dry_density,
        compressive_strength,
        thermal_conductivity,
        liquid,
        plastic,
        silt,
        clay,
        gravel,
        sand,
        optimum_moisture_content,
        plasticity_index,
        grain_size,
        water_content,
        color,
        tensile_strength,
        porosity,
        initial_moisture,
        earring,
        ground_altitude,
        average_temperature,
        rainfall_regime,

        //Chemical Properties
        alkalinity_acidity,
        organic_material,
        total_phosphorus,
        extractable_sulfur,
        interchangeable_aluminum,
        electric_conductivity,
        exchangeable_calcium,
        exchangeable_magnesium,
        exchangeable_potassium,
        exchangeable_sodium,
        extractable_copper,
        removable_iron,
        extractable_manganese,
        extractable_zinc,
        boron,

        //Biological Properties
        soil_organism,
        additional_remarks1,
        type_microbial_activity,
        intensity_activity,
        additional_remarks2,
        measurement_method1,
        measurement_results,
        additional_remarks3,
        macroinvertebrates,
        additional_remarks4,
        average_depth,
        measurement_method2,
        additional_remarks5,

        //Registration Completion
        order,
        suborder,
        great_group,
        sub_group,
        scientific_name,
    } = req.body

    const newSoil = new Soil(
        {
        apparent_density,
        real_density,
        relative_density,
        maximum_dry_density,
        compressive_strength,
        thermal_conductivity,
        liquid,
        plastic,
        silt,
        clay,
        gravel,
        sand,
        optimum_moisture_content,
        plasticity_index,
        grain_size,
        water_content,
        color,
        tensile_strength,
        porosity,
        initial_moisture,
        earring,
        ground_altitude,
        average_temperature,
        rainfall_regime,

        //Chemical Properties
        alkalinity_acidity,
        organic_material,
        total_phosphorus,
        extractable_sulfur,
        interchangeable_aluminum,
        electric_conductivity,
        exchangeable_calcium,
        exchangeable_magnesium,
        exchangeable_potassium,
        exchangeable_sodium,
        extractable_copper,
        removable_iron,
        extractable_manganese,
        extractable_zinc,
        boron,

        //Biological Properties
        soil_organism,
        additional_remarks1,
        type_microbial_activity,
        intensity_activity,
        additional_remarks2,
        measurement_method1,
        measurement_results,
        additional_remarks3,
        macroinvertebrates,
        additional_remarks4,
        average_depth,
        measurement_method2,
        additional_remarks5,

        //Registration Completion
        order,
        suborder,
        great_group,
        sub_group,
        scientific_name,

        user: req.user.id
        }
    )
    const soilSaved = await newSoil.save()
    res.json(soilSaved)
}

export const getSoil = async (req, res) => { 
    const soil = await Soil.findById(req.params.id).populate('user')
    if(!soil) return res.status(404).json({ message: 'Soil not found'})
    res.json(soil)
}

export const deleteSoil = async (req, res) => {
    const soil = await Soil.findByIdAndDelete(req.params.id)
    if(!soil) return res.status(404).json({ message: 'Soil not found'})
    return res.sendStatus(204);//204 is all ok, but nothing to return
 }

export const updateSoil = async (req, res) => { 
    const soil = await Soil.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
    if(!soil) return res.status(404).json({ message: 'Soil not found'})
    res.json(soil)
}