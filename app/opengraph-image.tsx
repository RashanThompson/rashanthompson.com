import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Rashan Thompson - Technology Strategist & Career Educator';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0a1628 0%, #1e3a5f 50%, #0f2744 100%)',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: 'absolute',
            top: -100,
            right: -100,
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: 'rgba(59, 130, 246, 0.1)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -150,
            left: -150,
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: 'rgba(59, 130, 246, 0.08)',
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '60px',
          }}
        >
          <div
            style={{
              fontSize: 24,
              color: '#60a5fa',
              textTransform: 'uppercase',
              letterSpacing: '4px',
              marginBottom: 20,
            }}
          >
            Technology Strategist
          </div>
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: '#f8fafc',
              marginBottom: 20,
              lineHeight: 1.1,
            }}
          >
            Rashan Thompson
          </div>
          <div
            style={{
              fontSize: 28,
              color: '#94a3b8',
              maxWidth: 800,
              lineHeight: 1.4,
            }}
          >
            25+ Years Fortune 500 Leadership • AI Transformation • CRM Implementation
          </div>

          {/* Metrics */}
          <div
            style={{
              display: 'flex',
              gap: 60,
              marginTop: 50,
            }}
          >
            {[
              { value: '25+', label: 'Years' },
              { value: '$100M+', label: 'Contracts' },
              { value: '1,500+', label: 'Team Members' },
            ].map((metric) => (
              <div
                key={metric.label}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    fontSize: 42,
                    fontWeight: 700,
                    background: 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)',
                    backgroundClip: 'text',
                    color: 'transparent',
                  }}
                >
                  {metric.value}
                </div>
                <div style={{ fontSize: 16, color: '#64748b', marginTop: 4 }}>
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* URL */}
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            fontSize: 20,
            color: '#475569',
          }}
        >
          rashanthompson.com
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
