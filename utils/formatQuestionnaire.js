const dateFormatter = new Intl.DateTimeFormat("id-ID", {
  day: "2-digit",
  month: "short",
  year: "numeric",
});

export const formatQuestionnairePeriod = (startDate, endDate) => {
  return `${dateFormatter.format(new Date(startDate))} - ${dateFormatter.format(new Date(endDate))}`;
};

export const formatQuestionnaireProgress = (filled, total) => {
  return `${filled}/${total} Sudah mengisi`;
};

export const formatQuestionnaireBatch = (batchYear) => {
  return `Untuk Angkatan ${batchYear}`;
};

export const formatQuestionnaireData = (item) => ({
  id: item.id,
  title: item.title,
  status: item.status,
  batch: formatQuestionnaireBatch(item.batchYear),
  period: formatQuestionnairePeriod(item.startDate, item.endDate),
  progress: formatQuestionnaireProgress(item.filled, item.total),
});
