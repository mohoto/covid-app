export const sortData = (data) => {
    const sorteData = [...data];
    sorteData.sort((a, b) =>
        a.cases > b.cases ? -1 : 1
    )
    return sorteData;
}