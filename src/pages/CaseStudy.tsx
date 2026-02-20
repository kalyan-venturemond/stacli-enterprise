import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import CaseStudyTemplate from '@/components/case-study/CaseStudyTemplate';
import { caseStudies } from '@/data/caseStudies';

const CaseStudy = () => {
    const { slug } = useParams<{ slug: string }>();

    // Find the case study data based on the slug
    const caseStudyData = caseStudies.find(study => study.slug === slug);

    // Scroll to top on mount or slug change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!caseStudyData) {
        // Alternatively, render a custom 404 component here
        return <Navigate to="/404" replace />;
    }

    return <CaseStudyTemplate data={caseStudyData} />;
};

export default CaseStudy;
