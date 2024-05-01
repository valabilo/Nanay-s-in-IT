import PartnerLayout from '@/Components/PartnerLayout';
import { Container } from 'react-bootstrap'

const Partner = () => {
    return (
        <Container>
            <div className='d-flex flex-column flex-lg-row justify-content-evenly align-items-center'>
                <PartnerLayout className='partner-logo mb-5' src="/images/accenture-logo.png" alt="" />
                <PartnerLayout className='partner-logo mb-5' src="/images/ymca-logo.png" alt="" />
                <PartnerLayout className='partner-logo mb-5' src="/images/pbsp-logo.png" alt="" />
            </div>
        </Container>
    )
}
export default Partner;