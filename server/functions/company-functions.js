const {getItems} = require("../data/items");
const {getCompanies} = require("../data/companies");

let items;
let companies;

const getData = async () => {
    items = await getItems();
    companies = await getCompanies();
}
getData();

// ********************************************************* //
// function that returns the products filtered by company ID //
// ********************************************************* //
const getCompanyProducts = (req) => {
    const { companyId } = req.params;

    // filters through the items to find those released by that specific company
    let filteredProducts = items.filter((item) => {
        if (item.companyId == companyId) {
            return item;
        }
    });

    return filteredProducts;
};


// ********************************************************* //
// function that returns the company's name based on its ID  //
// ********************************************************* //
const getCompanyName = (req) => {
    const { companyId } = req.params;

    let companyName;

    companies.forEach(company => {
        if (company._id == companyId) {
            companyName = company.name;
        }
    })

    return {companyName: companyName};
}

module.exports = {
    getCompanyProducts,
    getCompanyName,
};