import { useEffect, useState } from "react";
import type { JobResult, Job } from "../models/Job";

export const BASE_URL = "https://jobsearch.api.jobtechdev.se/search?";

interface JobsParams {
  offset?: number;
  limit?: number;
  q?: string;
  region?: string[];
  occupation?: string[];
}

export function useJobs({ offset = 0, limit = 25, q = "", region = [], occupation = [] }: JobsParams) {
  const [hits, setHits] = useState<Job[]>([]);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    if (!q && region.length === 0 && occupation.length === 0) {
      setHits([]);
      setTotalResults(0);
      return;
    }

    const fetchJobs = async () => {
      const params = new URLSearchParams();
      params.append("offset", String(offset));
      params.append("limit", String(limit));
      if (q) params.append("q", q);
      region.forEach((r) => params.append("region", r));
      occupation.forEach((o) => params.append("occupation-field", o));

      try {
        const res = await fetch(`${BASE_URL}${params.toString()}`);
        const json: JobResult = await res.json();
        setHits(json.hits || []);
        setTotalResults(Math.min(json.total?.value || json.hits?.length || 0, 4000));
      } catch {
        setHits([]);
        setTotalResults(0);
      }
    };

    fetchJobs();
  }, [offset, limit, q, region, occupation]);

  return { hits, totalResults };
}
