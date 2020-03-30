exports.get_all_products = (req, res, next) => {
    res.status(200).json({
        message: "Handling GET REquest"
    });
}