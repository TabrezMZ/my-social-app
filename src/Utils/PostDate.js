getPostDate = () => {
    const dateObj = new Date();
    return `${dateObj.getMonth() + 1}/${dateObj.getDate()} ${dateObj
        .getHours()
        .toString().padStart(2, '0')}:${
            dateObj
            .getMinutes()
            .toString()
            .padEnd(2,'')} UTC`;
            
}