
const orderService = require("../services/orderService");

module.exports.getOrdersByStatus = async (req, res) => {
  console.log("Inside getOrdersByStatus:",req.body)
  try {
      if(req.body.status){
     
           let data = await orderService.getOrdersUsingStatus(req.body);
           return res.status(201).json({ success: true, message: "Data fetch Success", data: data });
        
      }else{
        return res.status(400).json({ success: false, message: "Status field is required", data: {} });
      }    
   
  } catch (err) {
    console.log("Sorry ! getOrdersByStatus Failed!", err)
    return res.status(500).json({ success: false, message: "Sorry ! getOrdersByStatus Failed!", data: err });
  }
};



module.exports.acceptRequest = async (req, res) => {
    console.log("Inside acceptRequest:",req.body)
    try {
  
        let data = await orderService.updateOrderStatus(req.body.id, "ACTIVE");
        return res.status(201).json({ success: true, message: "Accepeted the request", data: data });
          
     
    } catch (err) {
      console.log("Sorry ! acceptRequest Failed!", err);
      return res.status(500).json({ success: false, message: "Sorry ! acceptRequest Failed!", data: err });
    }
  };


  module.exports.generateInvoice = async (req, res) => {
    console.log("Inside generateInvoice",req.body)
    try {
  
            let data = await orderService.updateOrderStatus(req.body.id, "PAYMENT");

            // Invoice generation codes will comes here
 
            return res.status(201).json({ success: true, message: "Invoice Generated", data: data });
          
     
    } catch (err) {
      console.log("Sorry ! generateInvoice Failed!", err)
      return res.status(500).json({ success: false, message: "Sorry ! generateInvoice Failed!", data: err });
    }
  };