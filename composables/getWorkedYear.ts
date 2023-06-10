export const useGetWorkedYear = () => {
  // calculate diffrence between current year and 2017

  const currentYear = new Date().getFullYear();
  const workedYear = currentYear - 2017;
  return workedYear;
};
