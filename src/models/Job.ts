export type JobResult = {
  total: { value: number };
  hits: Job[];
};

export type Job = {
  id: string;
  logo_url: string | null;
  headline: string;
  number_of_vacancies: number | null;
  description: {
    text: string;
    text_formatted: string;
    conditions: string | null;
  };

  employment_type: {
    label: string | null;
  };
  salary_type: {
    label: string | null;
  };

  duration: {
    label: string | null;
  };
  working_hours_type: {
    label: string | null;
  };
  employer: {
    url: string | null;
    name: string | null;
    workplace: string | null;
  };
  occupation: {
    label: string | null;
  };
  occupation_group: {
    concept_id: string | null;
    label: string | null;
    legacy_ams_taxonomy_id: string | null;
  };
  occupation_field: {
    concept_id: string | null;
    label: string | null;
    legacy_ams_taxonomy_id: string | null;
  };
  workplace_address: {
    region: string | null;
    region_code: string | null;
    municipality: string | null;
    municipality_code?: string;
    municipality_concept_id?: string;
  };
  publication_date: string;
};
