import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { Job } from "../models/Job";
import { ResultCard } from "../components/ResultCard"; // återanvänd kortet om du vill

export const SavedJobsPage = () => {
    const [savedJobs, setSavedJobs] = useState<Job[]>([]);

    useEffect(() => {
        // Läs ut sparade id:n
        const savedIds: string[] = JSON.parse(localStorage.getItem("savedJobs") || "[]");

        // Här behöver du hämta matchande jobb från API:et
        // Just nu mockar vi med tomma objekt, byt till fetch från ditt API
        const fetchSavedJobs = async () => {
            const jobs: Job[] = [];

            for (const id of savedIds) {
                const res = await fetch(`https://jobsearch.api.jobtechdev.se/job?id=${id}`);
                if (res.ok) {
                    const data = await res.json();
                    const job = data.hits?.[0];
                    if (job) jobs.push(job);
                }
            }

            setSavedJobs(jobs);
        };

        if (savedIds.length > 0) {
            fetchSavedJobs();
        }
    }, []);

    return (
        <section>
            <h1>Sparade jobb</h1>

            {savedJobs.length === 0 ? (
                <p>Du har inte sparat några jobb ännu.</p>
            ) : (
                <ul>
                    {savedJobs.map((job) => (
                        <ResultCard key={job.id} job={job} />
                    ))}
                </ul>
            )}

            <Link to="/jobb">← Tillbaka till alla jobb</Link>
        </section>
    );
};
