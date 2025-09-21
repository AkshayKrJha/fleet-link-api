export function vehicleRequestValidator(req, res, next) {
    // request body: name, capacityKg, tyres
    // ensure they are defined and have correct types
    const {name, capacityKg, tyres} = req.body;
    if (typeof name !== 'string' || name.trim() === '') {
        return res.status(400).json({error: 'Invalid or missing name'});
    }
    if (!capacityKg || typeof +capacityKg !== 'number' || isNaN(+capacityKg) || capacityKg <= 0) {
        return res.status(400).json({error: 'Invalid or missing capacity'});
    }
    if (!tyres || typeof +tyres !== 'number' || isNaN(+tyres) || tyres <= 0) {
        return res.status(400).json({error: 'Invalid or missing tyres'});
    }
    next();
}

// export function vehicleAvailableValidator(req, res, next) {
//     // fetch all rgese from query params
//     // get capacityRequired: Number
//     // fromPincode: String
//     // toPincode: String
//     // startTime: String (ISO Date format, e.g.,2023-10-27T10:00:00Z)

//     const {capacityRequired, fromPincode, toPincode, startTime} = req.query;
//     if (typeof capacityRequired!== 'number' || capacityRequired <= 0) {
//         return res.status(400).json({error: 'Invalid or missing capacity required'});
//     }
//     if (typeof fromPincode !== 'string' || fromPincode.trim() === '') {
//         return res.status(400).json({error: 'Invalid or missing fromPincode'});
//     }
//     if (typeof toPincode !== 'string' || toPincode.trim() === '') {
//         return res.status(400).json({error: 'Invalid or missing toPincode'});
//     }
//     if (isNaN(Date.parse(startTime))) {
//         return res.status(400).json({error: 'Invalid or missing startTime'});
//     }
//     next();
// }