export const formatUserData = (user) => {
  return {
    firstName: user.firstName || "",
    lastName: user.lastName || "",
    startDate: user.startDate || "",
    departement: user.departement || "",
    birthDate: user.birthDate || "",
    street: user.adress?.street || "",
    city: user.adress?.city || "",
    state: user.adress?.state || "",
    zip: user.adress?.zip || ""
  };
};