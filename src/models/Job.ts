export type Job = {
  id: string;
  logo_url: string | null;
  headline: string;
  description: {
    text: string;
  };
  employment_type: {
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
    region_concept_id: string | null;
  };
  publication_date: string;
};
