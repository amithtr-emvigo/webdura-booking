const Booking          = require("../models/bookingModel").Booking;


module.exports.getOrdersUsingStatus = async (body) => {
    try {
        console.log("Inside getOrdersUsingStatus ");

        const [bookings, count] = await Promise.all([
            Booking.find({"status": body.status}).skip(body.skip).limit(body.limit),
            Booking.count({"status": body.status})
        ]);

        return { bookings : bookings, count: count}
  

    } catch (err) {
        console.log("getOrdersUsingStatus Unexpected errors:", err);
        throw err;
    }


}



module.exports.updateOrderStatus = async (id, status) => {
    try {
        console.log("Inside updateOrderStatus: ",id);

        let res = await Booking.update({_id: id},{$set:{"status": status}});
        return res; 

    } catch (err) {
        console.log("updateOrderStatus Unexpected errors:", err);
        throw err;
    }


}