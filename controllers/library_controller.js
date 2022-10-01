module.exports.go = function(req, res){
    return res.render('library',{
        title : 'Therapy Center',
        type_of_map : 'Therapy Center',
    });
}