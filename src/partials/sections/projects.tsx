import React from 'react';
import styles from './projects.module.scss';

import InfoCard from '../components/infoCard';
import Image from 'next/image';

import Icons from 'feather-icons-react';
import testImg from '../assets/test-img.png';

import { useState, useEffect } from 'react';

const token = process.env.api_key;
const username = 'eritaakash';

type Repo = {
    name: string;
    description: string;
    private: boolean;
    url: string;
}

const Projects = () => {

    const [projects, setProjects] = useState([] as any[]);

    const fetchProjects = async () => {        
        const response = await fetch(`https://api.github.com/users/${username}/repos`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        const repositories = await response.json();
        return repositories;
    }

    useEffect(() => {
        fetchProjects().then((repositories) => {
            const updatedRepos: any[] = [];

            repositories.map((project: Repo) => {
                const repo = project;

                if (!repo.private) {
                    updatedRepos.push({
                        name: repo.name,
                        description: repo.description,
                        private: repo.private, // Add the 'private' property
                        url: `https://github.com/${username}/${repo.name}`
                    });
                }
            });

            const reposToShow = updatedRepos.filter(p => p.name !== username);
            setProjects(reposToShow);
        });
    }, []);


    const redirectToProject = (e) => {
        const projectName = e.target.id;
        const project = projects.find((project) => project.name === projectName);
        window.open(project.url, '_blank');
    }

    return (
        <section className={styles.projectsContainer}>
            <section className={styles.projects}>
                <h2>Projects</h2>

                <section className={styles.projectsList}>

                    {
                        projects.length > 0 
                        ? projects.map((project, i) => {
                            return (
                                <InfoCard key={i} content={
                                    <>
                                        <Image src={testImg} alt='project-image' />
                                        <h3>{project.name}</h3>
                                        <p>{project.description}</p>
                                        <button onClick={redirectToProject} id={project.name}> <Icons icon='github' /> <p>Source Code</p> </button>
                                    </>
                                } />
                            )
                        })
                        : <p className={styles.noProjectsCard}><Icons icon='alert-circle'/>No projects to display. Check it back later on?</p>
                    }
                </section>
            </section>
        </section>
    )
};

export default Projects;