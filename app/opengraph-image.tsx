import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

// Branded 1200x630 card used as the link preview (WhatsApp, Facebook, LinkedIn, etc.)
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'Rescue Initiative for Sustainable Development (RISD)';

export default async function OpengraphImage() {
  // Embed the logo as a data URI so it renders inside the generated image.
  const logo = await readFile(join(process.cwd(), 'public', 'risd-logo.jpg'));
  const logoSrc = `data:image/jpeg;base64,${logo.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#094C3B',
          backgroundImage:
            'radial-gradient(circle at 20% 25%, rgba(184,220,124,0.18) 0%, transparent 45%), radial-gradient(circle at 85% 80%, rgba(184,220,124,0.14) 0%, transparent 40%)',
          padding: 80,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoSrc}
          width={220}
          height={220}
          alt=""
          style={{
            borderRadius: 32,
            backgroundColor: '#ffffff',
            objectFit: 'contain',
          }}
        />
        <div
          style={{
            marginTop: 48,
            color: '#ffffff',
            fontSize: 52,
            fontWeight: 700,
            textAlign: 'center',
            lineHeight: 1.15,
            maxWidth: 900,
          }}
        >
          Rescue Initiative for Sustainable Development
        </div>
        <div
          style={{
            marginTop: 24,
            color: '#9BDC51',
            fontSize: 30,
            fontWeight: 500,
            textAlign: 'center',
          }}
        >
          Empowering the Poor and Vulnerable for Sustainable Environment
        </div>
      </div>
    ),
    { ...size }
  );
}
