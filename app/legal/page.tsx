"use client"

import { useTranslation } from "@/components/language-provider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { downloadTermsAsPDF, downloadPrivacyAsPDF } from "@/lib/pdf-generator"

export default function LegalPage() {
  const { t } = useTranslation()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Scroll to top when the page loads
    window.scrollTo(0, 0)
  }, [])

  // Get the default tab from URL params
  const defaultTab = searchParams?.get("tab") === "privacy" ? "privacy" : "terms"

  return (
    <div className="container px-4 md:px-6 py-12">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t("legal.title")}</h1>
        <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
      </div>

      <Tabs defaultValue={defaultTab} className="w-full max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="terms">{t("legal.termsTitle")}</TabsTrigger>
          <TabsTrigger value="privacy">{t("legal.privacyTitle")}</TabsTrigger>
        </TabsList>
        <TabsContent value="terms">
          <Card>
            <CardHeader>
              <CardTitle>{t("legal.termsTitle")}</CardTitle>
              <CardDescription>{t("legal.lastUpdated")}: June 12, 2025</CardDescription>
              <div className="flex justify-end">
                <Button variant="outline" size="sm" onClick={downloadTermsAsPDF}>
                  <Download className="mr-2 h-4 w-4" />
                  {t("legal.downloadPdf")}
                </Button>
              </div>
            </CardHeader>
            <CardContent className="prose prose-invert max-w-none">
              <h2>1. Introduction</h2>
              <p>
                Welcome to Eclipse Growth Optimization Services ("EGOS"). By accessing our website at ego-services.com,
                you agree to be bound by these Terms of Service and to use our website in accordance with these Terms of
                Service, our Privacy Policy, and any additional terms and conditions that may apply to specific sections
                of our website or to products and services available through our website or from EGOS.
              </p>

              <h2>2. Acceptance of Terms</h2>
              <p>
                By accessing and using our services, you accept and agree to be bound by the terms and provision of this
                agreement. Additionally, when using particular services, you shall be subject to any posted guidelines
                or rules applicable to such services, which may be posted and modified from time to time. All such
                guidelines or rules are hereby incorporated by reference into these Terms of Service.
              </p>

              <h2>3. Description of Services</h2>
              <p>
                EGOS provides various tools and services for business optimization, including but not limited to DevBot
                and InsightGrid. We reserve the right to withdraw or amend the services we provide on our website
                without notice. We will not be liable if for any reason all or any part of our website is unavailable at
                any time or for any period.
              </p>

              <h2>4. User Accounts</h2>
              <p>
                Some services may require you to create an account. You are responsible for maintaining the
                confidentiality of your account and password and for restricting access to your computer. You agree to
                accept responsibility for all activities that occur under your account or password.
              </p>

              <h2>5. Intellectual Property</h2>
              <p>
                The website and its original content, features, and functionality are owned by Eclipse Growth
                Optimization Services and are protected by international copyright, trademark, patent, trade secret, and
                other intellectual property or proprietary rights laws.
              </p>

              <h2>6. User Content</h2>
              <p>
                Our services may allow you to post, link, store, share and otherwise make available certain information,
                text, graphics, videos, or other material. You are responsible for the content that you post to the
                service, including its legality, reliability, and appropriateness.
              </p>

              <h2>7. Prohibited Uses</h2>
              <p>
                You may use our website only for lawful purposes and in accordance with these Terms of Service. You
                agree not to use our website:
              </p>
              <ul>
                <li>
                  In any way that violates any applicable federal, state, local, or international law or regulation.
                </li>
                <li>
                  To transmit, or procure the sending of, any advertising or promotional material, including any "junk
                  mail," "chain letter," "spam," or any other similar solicitation.
                </li>
                <li>
                  To impersonate or attempt to impersonate EGOS, an EGOS employee, another user, or any other person or
                  entity.
                </li>
                <li>
                  To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the website, or
                  which, as determined by us, may harm EGOS or users of the website, or expose them to liability.
                </li>
              </ul>

              <h2>8. Termination</h2>
              <p>
                We may terminate or suspend your account and bar access to the service immediately, without prior notice
                or liability, under our sole discretion, for any reason whatsoever and without limitation, including but
                not limited to a breach of the Terms.
              </p>

              <h2>9. Limitation of Liability</h2>
              <p>
                In no event shall EGOS, nor its directors, employees, partners, agents, suppliers, or affiliates, be
                liable for any indirect, incidental, special, consequential or punitive damages, including without
                limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access
                to or use of or inability to access or use the service.
              </p>

              <h2>10. Changes to Terms</h2>
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a
                revision is material, we will provide at least 30 days' notice prior to any new terms taking effect.
                What constitutes a material change will be determined at our sole discretion.
              </p>

              <h2>11. Contact Us</h2>
              <p>If you have any questions about these Terms, please contact us at emiliano.outeda@gmail.com.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="privacy">
          <Card>
            <CardHeader>
              <CardTitle>{t("legal.privacyTitle")}</CardTitle>
              <CardDescription>{t("legal.lastUpdated")}: June 12, 2025</CardDescription>
              <div className="flex justify-end">
                <Button variant="outline" size="sm" onClick={downloadPrivacyAsPDF}>
                  <Download className="mr-2 h-4 w-4" />
                  {t("legal.downloadPdf")}
                </Button>
              </div>
            </CardHeader>
            <CardContent className="prose prose-invert max-w-none">
              <h2>1. Introduction</h2>
              <p>
                Eclipse Growth Optimization Services ("EGOS", "we", "us", or "our") is committed to protecting your
                privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when
                you visit our website ego-services.com or use our services.
              </p>

              <h2>2. Information We Collect</h2>
              <p>We may collect information about you in a variety of ways. The information we may collect includes:</p>
              <h3>2.1 Personal Data</h3>
              <p>
                Personally identifiable information, such as your name, email address, and telephone number, that you
                voluntarily give to us when you register with our services or when you choose to participate in various
                activities related to our services.
              </p>
              <h3>2.2 Derivative Data</h3>
              <p>
                Information our servers automatically collect when you access our services, such as your IP address,
                browser type, operating system, access times, and the pages you have viewed directly before and after
                accessing our services.
              </p>
              <h3>2.3 Financial Data</h3>
              <p>
                Financial information, such as data related to your payment method (e.g., valid credit card number, card
                brand, expiration date) that we may collect when you purchase, order, return, exchange, or request
                information about our services.
              </p>

              <h2>3. Use of Your Information</h2>
              <p>
                Having accurate information about you permits us to provide you with a smooth, efficient, and customized
                experience. Specifically, we may use information collected about you via our services to:
              </p>
              <ul>
                <li>Create and manage your account.</li>
                <li>Process your transactions.</li>
                <li>Send you email newsletters, if you have opted in to receive them.</li>
                <li>Respond to your inquiries and customer service requests.</li>
                <li>
                  Deliver targeted advertising, newsletters, and other information regarding promotions and our services
                  to you.
                </li>
                <li>Administer sweepstakes, promotions, and contests.</li>
                <li>Compile anonymous statistical data for research purposes.</li>
                <li>Assist law enforcement and respond to subpoenas.</li>
                <li>Troubleshoot problems with our services.</li>
                <li>Prevent fraudulent transactions and monitor against theft.</li>
              </ul>

              <h2>4. Disclosure of Your Information</h2>
              <p>
                We may share information we have collected about you in certain situations. Your information may be
                disclosed as follows:
              </p>
              <h3>4.1 By Law or to Protect Rights</h3>
              <p>
                If we believe the release of information about you is necessary to respond to legal process, to
                investigate or remedy potential violations of our policies, or to protect the rights, property, and
                safety of others, we may share your information as permitted or required by any applicable law, rule, or
                regulation.
              </p>
              <h3>4.2 Third-Party Service Providers</h3>
              <p>
                We may share your information with third parties that perform services for us or on our behalf,
                including payment processing, data analysis, email delivery, hosting services, customer service, and
                marketing assistance.
              </p>
              <h3>4.3 Marketing Communications</h3>
              <p>
                With your consent, or with an opportunity for you to withdraw consent, we may share your information
                with third parties for marketing purposes.
              </p>
              <h3>4.4 Interactions with Other Users</h3>
              <p>
                If you interact with other users of our services, those users may see your name, profile photo, and
                descriptions of your activity.
              </p>
              <h3>4.5 Online Postings</h3>
              <p>
                When you post comments, contributions, or other content to our services, your posts may be viewed by all
                users and may be publicly distributed outside our services in perpetuity.
              </p>
              <h3>4.6 Business Transfers</h3>
              <p>
                We may share or transfer your information in connection with, or during negotiations of, any merger,
                sale of company assets, financing, or acquisition of all or a portion of our business to another
                company.
              </p>

              <h2>5. Security of Your Information</h2>
              <p>
                We use administrative, technical, and physical security measures to help protect your personal
                information. While we have taken reasonable steps to secure the personal information you provide to us,
                please be aware that despite our efforts, no security measures are perfect or impenetrable, and no
                method of data transmission can be guaranteed against any interception or other type of misuse.
              </p>

              <h2>6. Your Rights Regarding Your Data</h2>
              <p>You have certain rights regarding your personal data:</p>
              <ul>
                <li>Right to Access – You have the right to request copies of your personal data.</li>
                <li>
                  Right to Rectification – You have the right to request that we correct any information you believe is
                  inaccurate or complete information you believe is incomplete.
                </li>
                <li>
                  Right to Erasure – You have the right to request that we erase your personal data, under certain
                  conditions.
                </li>
                <li>
                  Right to Restrict Processing – You have the right to request that we restrict the processing of your
                  personal data, under certain conditions.
                </li>
                <li>
                  Right to Object to Processing – You have the right to object to our processing of your personal data,
                  under certain conditions.
                </li>
                <li>
                  Right to Data Portability – You have the right to request that we transfer the data that we have
                  collected to another organization, or directly to you, under certain conditions.
                </li>
              </ul>

              <h2>7. Children's Privacy</h2>
              <p>
                Our services are not intended for use by children under the age of 13. We do not knowingly collect
                personal information from children under 13. If you are under 13, please do not provide any information
                on our services.
              </p>

              <h2>8. Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
                Privacy Policy on this page and updating the "Last Updated" date at the top of this page. You are
                advised to review this Privacy Policy periodically for any changes.
              </p>

              <h2>9. Contact Us</h2>
              <p>
                If you have questions or comments about this Privacy Policy, please contact us at
                emiliano.outeda@gmail.com.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
