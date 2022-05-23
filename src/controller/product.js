const { response, request } = require('express');

const obtenerProductos = ( req , res = response )=>{

    res.status(200).json({
        msg:'Ok..'
    });

}

const crearProductos = ( req , res = response )=>{
    res.status(200).json({
        msg:'post OK..'
    });
}

module.exports={
    obtenerProductos,
    crearProductos
};