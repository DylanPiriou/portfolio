// Fonction qui permet d'avoir l'année en cours
export const getCurrentYear = () => {
    const now = new Date();
    return now.getFullYear();
}