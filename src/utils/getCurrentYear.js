// Fonction qui permet de retourner l'année en cours
export const getCurrentYear = () => {
    const now = new Date();
    return now.getFullYear();
}