export const menu = (obj, index, bool) => {
    obj.forEach(element => {
        element.isChanged = false;
    });

    if (!bool) {
        obj[index].isChanged = true;
    }

    return obj;
};

export const menuItems = [
    {
        title: "Գլխավոր",
        link: "/"
    }, {
        title: "Դասընթացներ",
        link: "/courses"
    }, {
        title: "Բլոգ",
        link: "blog"
    }, {
        title: "Մեր մասին",
        link: "/about"
    }
];

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    menu,
    menuItems : menuItems
};