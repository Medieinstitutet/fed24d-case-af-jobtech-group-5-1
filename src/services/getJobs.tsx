import { useEffect, useState } from "react";
import type { JobResult, Job } from "../models/Job";

const BASE_URL = "https://jobsearch.api.jobtechdev.se/search?";

interface JobsParams {
  offset?: number;
  limit?: number;
  q?: string;
  region?: string;
  occupation?: string;
}

export function useJobs({ offset = 0, limit = 25, q = "", region = "", occupation = "" }: JobsParams) {
  const [hits, setHits] = useState<Job[]>([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const params = new URLSearchParams({
        offset: String(offset),
        limit: String(limit),
        q,
      });

      if (region) params.append("region", region);
      if (occupation) params.append("occupation-field", occupation);

      try {
        const res = await fetch(`${BASE_URL}${params.toString()}`);
        const json: JobResult = await res.json();
        setHits(json.hits || []);
      } catch {
        setHits([]);
      }
    };

    fetchJobs();
  }, [offset, limit, q, region, occupation]);

  return hits;
}
