export const getPaginationData = (currentPage: number, limit: number, totalResults: number, currentResultsCount: number) => {
  const offset = limit * (currentPage - 1);
  const totalPages = Math.ceil(totalResults / limit);
  const currentResultStart = offset + 1;
  const currentResultEnd = offset + currentResultsCount;

  return { offset, totalPages, currentResultStart, currentResultEnd };
};