import Script from 'next/script';

export default function Head() {
  return (
    <>
      <title>Bugema University</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="Bugema University Website" />
      <Script
          id="google-analytics"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-TE9HEEZ2BK');
            `,
          }}
        />
        
      <link rel="shortcut icon" type="image/x-icon" href="bu_logo.png"  />
    </>
  );
}
