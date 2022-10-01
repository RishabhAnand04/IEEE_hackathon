module.exports.go = function(req, res){
    console.log("well u came here")
    return res.render('restaurant',{
        title : 'Medical',
        type_of_map : 'Medical Consultancy Center',
    });
}