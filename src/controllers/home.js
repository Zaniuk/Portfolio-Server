const {Home} = require('../../models');
const getHome = async (req, res) => {
    const home = await Home.find({
        where: {
            id: 1
        }
    });
    res.json({
        home
    });
}
const updateHome = async (req, res) => {
    const {greeting, subtitle, description} = req.body;
    const id = 1;
    try{
        const home = await Home.update({
            greeting,
            subtitle,
            description
        },
        {
            where: {
                id
            }
            
        });
        res.json({
            message: 'Home updated successfully',
            data: home
        });
    }catch(e){
        res.status(500).json({
            message: 'Something goes wrong',
            errorData: e
        });
    }
}
module.exports = {
    getHome,
    updateHome
}