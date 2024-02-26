"use client"

import CookieConsent from 'react-cookie-consent';
import { setCookie } from 'cookies-next';
import Link from 'next/link';

const CookieConsentBanner = () => {
  const handleAccept = () => {
    setCookie('cookie_consent', 'true', {
      maxAge: 30 * 24 * 60 * 60, // 30 days
      path: '/',
    });
  };

  return (
    <CookieConsent
      enableDeclineButton
      flipButtons
      location="bottom"
      buttonText="Accept"
      declineButtonText="Decline"
      cookieName="GtechCookie"
      buttonClasses="cookieButton"
      onAccept={handleAccept}
      overlay
      style={{
        background: 'rgb(255, 255, 255)',
        color: 'rgb(48, 48, 48)',
        padding: '0.5rem 0.75rem',
        width: '99vh',
        margin: '1rem',
        borderRadius: '1.5rem',
        alignItems: 'center'
      }}
      buttonStyle={{
        color: 'rgb(255 255 255 / 1)',
        backgroundColor: 'rgb(17, 20, 34)',
        fontSize: '1rem',
        fontWeight: '600',
        lineHeight: '1.5rem',
        borderRadius: '0.5rem'
      }}
      declineButtonStyle={{
        color: 'rgb(255 255 255 / 1)',
        backgroundColor: 'rgb(17, 20, 34)',
        fontSize: '1rem',
        fontWeight: '600',
        lineHeight: '1.5rem',
        borderRadius: '0.5rem'
      }}
      expires={450}
    >
      This website uses cookies & analytics. By continuing to browse the site, you are agreeing to our privacy policy.&nbsp; <br />
      <Link href="/privacy-policy"
            className="bg-gray-300 cursor-allowed inline-block underline text-base font-medium text-body-color hover:text-black"
      >
        Learn more
      </Link>
    </CookieConsent>
  );
};

export default CookieConsentBanner;