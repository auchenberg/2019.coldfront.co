
import WideSection from '../../components/wideSection'
import Layout from '../../components/layout'

export default () => (
    <Layout>

        <WideSection>
            <div className="page-advisory-board">
                <h1>Advisory board</h1>
                <p>ColdFront is more than your typical conference. We want you to have a great social experience, and we believe socializing and netwokring is is big part of why we go to conferences.</p>
                <p>We are collaborating with a number of truly amazing people in Copenhagen, that will help you experience many sides of Copenhagen, as we are organzing a bunch of optionl social events that you can choose to participate in to meet new people.All of this in addition to the conference days.</p>
                <p>We believe conference food should be nutritious, coffee should be great, and parties should be focused about meeting people; not getting hammered.</p>

                <br />
                <img src="/static/images/program.png" width="100%" />

                <style jsx>{`

            blockquote {
                margin-left: 40px;
                margin-bottom: 40px;
            }

            .image-about {
                background-image:url('/static/images/the-team.jpg');
                height: 500px;
                margin-bottom: -200px;
            }

            .list {
                padding: 50px 0 0 0;

                ul {
                    list-style: none;
                    padding-top: 50px;
                }

                li {
                    height: 500px;
                    background-repeat: no-repeat;
                    background-size: cover;

                    display: flex;
                    align-items: flex-end;
                    justify-content: center;

                    padding: 20px;
                    position: relative;
                }

                .overlay {
                    background-image: linear-gradient(to top, #1c1c2d, rgba(28, 28, 45, 0.80) 100%, rgba(108, 28, 45, 0));
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;
                }

                .text {
                    position: relative;
                    z-index: 2;
                    padding: 15px;
                }

                .kenneth {
                    background-image: url(/static/images/kenneth.jpg);
                }

                .michael {
                    background-image: url(/static/images/michael.jpg);
                }

            }

            @media (max-width: 1000px) {
                .organizers {
                    padding-top: 20px;;

                    ul {
                        padding: 0;
                    }
                }

                .organizers li {
                    padding: 0;
                    height: 300px;
                }

                blockquote {
                    margin-left: 20px;
                    margin-bottom: 20px;
                }
            }

            `}
                </style>
            </div>
        </WideSection>
    </Layout>
)





