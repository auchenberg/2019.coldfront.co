import Layout from "../components/layout";
import Section from "../components/section";
import Intro from "../components/intro";
import Link from "next/link";

export default () => (
  <Layout title="Cancellation of ColdFront 2019">
    <Section>
      <Intro
        title="Cancellation of ColdFront 2019"
        text="Following weeks of deliberate conversations, we have made the decision to cancel ColdFront 2019 which was scheduled to take place on 26-29th November 2019 in Copenhagen."
        img="/static/images/cancelled.jpg"
      />
    </Section>
    
    <Section bright>
      <div className="narrow">
        <p>After weeks of deliberate conversations, we have made the decision to cancel ColdFront 2019 which was scheduled to take place on 26-29th November 2019 in Copenhagen.We have come to this conclusion as we won’t be able to deliver a ColdFront in the same quality as our previous years, due to unavoidable circumstances for the organizing team.</p>

        <p>We have come to this conclusion as we won’t be able to deliver a ColdFront in the same quality as our previous years, due to unavoidable circumstances for the organizing team.</p>
        
        <p>We know that many of you have been looking forward to ColdFront 2019, and so have we. We are sorry for this cancellation, but we’d rather cancel ColdFront than sell tickets to an event that does not meet the bar.</p>

        <h2>All tickets will be refunded</h2>
        <p>For those of you who have purchased early bird tickets, we will be issuing a full refund. The refund will be issued via our ticket system Tito and payment processor Stripe this week. For those who have purchased tickets via Invoice, we will email you to coordinate the next steps.</p>

        <p>The Stripe refund time will depend on your bank, and you can read more here, <a href="https://support.stripe.com/questions/how-long-refunds-take-to-process">https://support.stripe.com/questions/how-long-refunds-take-to-process</a></p>

        <h2>Time for a break</h2>
        <p>This means that ColdFront will take a break in 2019, to contemplate what's next, and how we can rethink the setup and organizing team around the conference.</p>

        <p>Thanks for the understanding and in particular a big thanks to all of our attendees, speakers, partners and volunteers for putting your work, support, and trust in us over the years.</p>

        <p>/Team ColdFront</p>

        <img src="/static/images/team_2018.JPG" className="team" />
      </div>

    </Section>

    <style jsx>
      {`

        .team {
          max-width: 70%;
        }
      `}
    </style>
  </Layout>
);
