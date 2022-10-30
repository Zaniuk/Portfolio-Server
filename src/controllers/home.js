const {Home} = require('../../models');
const getHome = async (req, res) => {
    const home = await Home.findOne({
        where: {
            id: 1
        }
    });
    res.json(
        home
    );
}
const updateHome = async (req, res) => {
    const {greeting, subtitle, description} = req.body;
    const id = 1;
    try{
        await Home.update({
            greeting,
            subtitle,
            description
        },
        {
            where: {
                id
            }
            
        });
        const newHome = await Home.findOne({
            where: {
                id
            }
        });

        res.json({
            message: 'Home updated successfully',
            data: newHome
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