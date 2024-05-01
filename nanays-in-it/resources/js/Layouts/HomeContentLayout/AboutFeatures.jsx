import { Container } from "react-bootstrap"


const AboutFeatures = () => {
    return (
        <Container className="px-5 py-5">
            <div className="d-flex flex-lg-row flex-column gap-3">
                <div className="feature-item text-center">
                    <h5 className="feature-item ">
                        Equip Beneficiaries
                    </h5>
                    <div className="feature-content fs-6">
                        Create opportunities for beneficiaries to get jobs in the IT sector through skills training and practical application.
                    </div>
                </div>

                <div className="feature-item text-center">
                    <h5 className="feature-item">
                        80% Completion
                    </h5>
                    <div className="feature-content fs-6">
                        Majority of the beneficiaries should be able to complete all tasks within 4 months and be prepared for the 2 months On the Job Training
                    </div>
                </div>

                <div className="feature-item text-center">
                    <h5 className="feature-item">
                        Empowered Learners
                    </h5>
                    <div className="feature-content fs-6">
                        Build learner confidence with increase skills and knowledge in the IT workforce and entrepreneurial efforts.
                    </div>
                </div>

                <div className="feature-item text-center">
                    <h5 className="feature-item">
                        60% Employment
                    </h5>
                    <div className="feature-content fs-6">
                        Target to create employment opportunities to more than half of the learners or have their own business within 6 months after the trainin
                    </div>
                </div>
            </div>
        </Container>
    )
}
export default AboutFeatures;