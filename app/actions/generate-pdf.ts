"use server"

export async function generateTermsPDF() {
  const termsContent = `
TERMS OF SERVICE
Eclipse Growth Optimization Services (EGOS)
Last Updated: June 12, 2025

1. INTRODUCTION
Welcome to Eclipse Growth Optimization Services ("EGOS"). By accessing our website at ego-services.com, you agree to be bound by these Terms of Service and to use our website in accordance with these Terms of Service, our Privacy Policy, and any additional terms and conditions that may apply to specific sections of our website or to products and services available through our website or from EGOS.

2. ACCEPTANCE OF TERMS
By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement. Additionally, when using particular services, you shall be subject to any posted guidelines or rules applicable to such services, which may be posted and modified from time to time. All such guidelines or rules are hereby incorporated by reference into these Terms of Service.

3. DESCRIPTION OF SERVICES
EGOS provides various tools and services for business optimization, including but not limited to DevBot and InsightGrid. We reserve the right to withdraw or amend the services we provide on our website without notice. We will not be liable if for any reason all or any part of our website is unavailable at any time or for any period.

4. USER ACCOUNTS
Some services may require you to create an account. You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer. You agree to accept responsibility for all activities that occur under your account or password.

5. INTELLECTUAL PROPERTY
The website and its original content, features, and functionality are owned by Eclipse Growth Optimization Services and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.

6. USER CONTENT
Our services may allow you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material. You are responsible for the content that you post to the service, including its legality, reliability, and appropriateness.

7. PROHIBITED USES
You may use our website only for lawful purposes and in accordance with these Terms of Service. You agree not to use our website:
- In any way that violates any applicable federal, state, local, or international law or regulation.
- To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail," "chain letter," "spam," or any other similar solicitation.
- To impersonate or attempt to impersonate EGOS, an EGOS employee, another user, or any other person or entity.
- To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the website, or which, as determined by us, may harm EGOS or users of the website, or expose them to liability.

8. TERMINATION
We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.

9. LIMITATION OF LIABILITY
In no event shall EGOS, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service.

10. CHANGES TO TERMS
We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.

11. CONTACT US
If you have any questions about these Terms, please contact us at emiliano.outeda@gmail.com.

Eclipse Growth Optimization Services
ego-services.com
`

  return {
    content: termsContent,
    filename: "EGOS-Terms-of-Service.pdf",
  }
}

export async function generatePrivacyPDF() {
  const privacyContent = `
PRIVACY POLICY
Eclipse Growth Optimization Services (EGOS)
Last Updated: June 12, 2025

1. INTRODUCTION
Eclipse Growth Optimization Services ("EGOS", "we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website ego-services.com or use our services.

2. INFORMATION WE COLLECT
We may collect information about you in a variety of ways. The information we may collect includes:

2.1 Personal Data
Personally identifiable information, such as your name, email address, and telephone number, that you voluntarily give to us when you register with our services or when you choose to participate in various activities related to our services.

2.2 Derivative Data
Information our servers automatically collect when you access our services, such as your IP address, browser type, operating system, access times, and the pages you have viewed directly before and after accessing our services.

2.3 Financial Data
Financial information, such as data related to your payment method (e.g., valid credit card number, card brand, expiration date) that we may collect when you purchase, order, return, exchange, or request information about our services.

3. USE OF YOUR INFORMATION
Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via our services to:
- Create and manage your account.
- Process your transactions.
- Send you email newsletters, if you have opted in to receive them.
- Respond to your inquiries and customer service requests.
- Deliver targeted advertising, newsletters, and other information regarding promotions and our services to you.
- Administer sweepstakes, promotions, and contests.
- Compile anonymous statistical data for research purposes.
- Assist law enforcement and respond to subpoenas.
- Troubleshoot problems with our services.
- Prevent fraudulent transactions and monitor against theft.

4. DISCLOSURE OF YOUR INFORMATION
We may share information we have collected about you in certain situations. Your information may be disclosed as follows:

4.1 By Law or to Protect Rights
If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.

4.2 Third-Party Service Providers
We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.

4.3 Marketing Communications
With your consent, or with an opportunity for you to withdraw consent, we may share your information with third parties for marketing purposes.

4.4 Interactions with Other Users
If you interact with other users of our services, those users may see your name, profile photo, and descriptions of your activity.

4.5 Online Postings
When you post comments, contributions, or other content to our services, your posts may be viewed by all users and may be publicly distributed outside our services in perpetuity.

4.6 Business Transfers
We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.

5. SECURITY OF YOUR INFORMATION
We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.

6. YOUR RIGHTS REGARDING YOUR DATA
You have certain rights regarding your personal data:
- Right to Access – You have the right to request copies of your personal data.
- Right to Rectification – You have the right to request that we correct any information you believe is inaccurate or complete information you believe is incomplete.
- Right to Erasure – You have the right to request that we erase your personal data, under certain conditions.
- Right to Restrict Processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.
- Right to Object to Processing – You have the right to object to our processing of your personal data, under certain conditions.
- Right to Data Portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.

7. CHILDREN'S PRIVACY
Our services are not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13. If you are under 13, please do not provide any information on our services.

8. CHANGES TO THIS PRIVACY POLICY
We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this page. You are advised to review this Privacy Policy periodically for any changes.

9. CONTACT US
If you have questions or comments about this Privacy Policy, please contact us at emiliano.outeda@gmail.com.

Eclipse Growth Optimization Services
ego-services.com
`

  return {
    content: privacyContent,
    filename: "EGOS-Privacy-Policy.pdf",
  }
}
