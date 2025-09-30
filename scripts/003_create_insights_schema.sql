-- Create insights/blog posts table
CREATE TABLE IF NOT EXISTS public.insights (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  featured_image TEXT,
  category TEXT NOT NULL,
  author_id UUID REFERENCES auth.users(id),
  author_name TEXT NOT NULL,
  author_avatar TEXT,
  published_at TIMESTAMP WITH TIME ZONE,
  is_featured BOOLEAN DEFAULT false,
  read_time INTEGER DEFAULT 5,
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_insights_slug ON public.insights(slug);
CREATE INDEX IF NOT EXISTS idx_insights_status ON public.insights(status);
CREATE INDEX IF NOT EXISTS idx_insights_category ON public.insights(category);
CREATE INDEX IF NOT EXISTS idx_insights_published_at ON public.insights(published_at);
CREATE INDEX IF NOT EXISTS idx_insights_featured ON public.insights(is_featured);

-- Enable Row Level Security
ALTER TABLE public.insights ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can read published insights
CREATE POLICY "Anyone can read published insights"
  ON public.insights
  FOR SELECT
  USING (status = 'published');

-- Policy: Admins can do everything
CREATE POLICY "Admins can manage all insights"
  ON public.insights
  FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role = 'admin'
    )
  );

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_insights_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER insights_updated_at
  BEFORE UPDATE ON public.insights
  FOR EACH ROW
  EXECUTE FUNCTION update_insights_updated_at();

-- Insert sample insights data
INSERT INTO public.insights (title, slug, excerpt, content, featured_image, category, author_name, author_avatar, published_at, is_featured, read_time, status)
VALUES
  (
    'Digital Transformation: A Strategic Imperative for Modern Businesses',
    'digital-transformation-strategic-imperative',
    'Explore how digital transformation is reshaping business operations and creating competitive advantages in today''s market.',
    'Digital transformation has become a critical priority for organizations across all industries. In this comprehensive guide, we explore the key drivers, challenges, and best practices for successful digital transformation initiatives.

## Understanding Digital Transformation

Digital transformation goes beyond simply adopting new technologies. It represents a fundamental shift in how organizations operate, deliver value to customers, and compete in the marketplace.

## Key Components

1. **Technology Infrastructure**: Modern cloud-based systems and platforms
2. **Data Analytics**: Leveraging data for informed decision-making
3. **Customer Experience**: Digital-first customer engagement strategies
4. **Organizational Culture**: Fostering innovation and agility

## Implementation Strategy

Successful digital transformation requires a clear vision, strong leadership commitment, and a phased approach to implementation. Organizations must balance quick wins with long-term strategic goals.

## Measuring Success

Key performance indicators should include operational efficiency gains, customer satisfaction improvements, and revenue growth from digital channels.',
    '/digital-transformation.png',
    'Digital Transformation',
    'Sarah Johnson',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    NOW() - INTERVAL '2 days',
    true,
    8,
    'published'
  ),
  (
    'Supply Chain Optimization in the Post-Pandemic Era',
    'supply-chain-optimization-post-pandemic',
    'Learn how companies are rebuilding resilient supply chains with advanced analytics and strategic partnerships.',
    'The COVID-19 pandemic exposed vulnerabilities in global supply chains, forcing organizations to rethink their strategies. This article examines emerging trends and best practices in supply chain optimization.

## The New Supply Chain Landscape

Organizations are moving away from just-in-time models toward more resilient, diversified supply chain strategies that balance efficiency with risk management.

## Technology Enablers

- **AI and Machine Learning**: Predictive analytics for demand forecasting
- **IoT Sensors**: Real-time tracking and monitoring
- **Blockchain**: Enhanced transparency and traceability
- **Digital Twins**: Simulation and scenario planning

## Building Resilience

Key strategies include supplier diversification, nearshoring critical components, and investing in supply chain visibility tools.

## Future Outlook

The future of supply chain management will be characterized by greater automation, sustainability focus, and collaborative ecosystems.',
    '/supply-chain-warehouse.png',
    'Operations',
    'Michael Chen',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael',
    NOW() - INTERVAL '5 days',
    true,
    6,
    'published'
  ),
  (
    'Strategic Planning in Uncertain Times',
    'strategic-planning-uncertain-times',
    'Discover adaptive planning frameworks that help organizations navigate volatility and maintain competitive advantage.',
    'In an era of rapid change and uncertainty, traditional strategic planning approaches are no longer sufficient. Organizations need more agile, adaptive frameworks.

## The Challenge of Uncertainty

Market volatility, technological disruption, and geopolitical tensions create an environment where long-term planning becomes increasingly difficult.

## Adaptive Planning Framework

1. **Scenario Planning**: Develop multiple future scenarios
2. **Rolling Forecasts**: Update plans quarterly rather than annually
3. **Strategic Options**: Maintain flexibility in strategic choices
4. **Rapid Experimentation**: Test and learn quickly

## Key Success Factors

- Strong leadership alignment
- Cross-functional collaboration
- Data-driven decision making
- Cultural adaptability

## Implementation Roadmap

Organizations should start with pilot programs, build internal capabilities, and gradually scale successful approaches across the enterprise.',
    '/business-strategy-planning.png',
    'Strategy',
    'Emily Rodriguez',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily',
    NOW() - INTERVAL '7 days',
    true,
    7,
    'published'
  ),
  (
    'Change Management: Leading Organizational Transformation',
    'change-management-organizational-transformation',
    'Master the art of leading change with proven frameworks and practical strategies for organizational transformation.',
    'Effective change management is critical for successful organizational transformation. This guide provides practical frameworks and strategies for change leaders.

## Understanding Resistance

Change resistance is natural and often stems from fear of the unknown, loss of control, or concerns about competence in new ways of working.

## The ADKAR Model

- **Awareness**: Understanding why change is needed
- **Desire**: Personal motivation to support change
- **Knowledge**: Information about how to change
- **Ability**: Skills to implement change
- **Reinforcement**: Sustaining the change

## Communication Strategy

Clear, consistent, and transparent communication is essential throughout the change journey. Leaders must over-communicate and create multiple feedback channels.

## Measuring Progress

Track both quantitative metrics (adoption rates, performance indicators) and qualitative measures (employee sentiment, cultural shifts).',
    '/change-management-business-transformation.jpg',
    'Change Management',
    'David Park',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
    NOW() - INTERVAL '10 days',
    false,
    6,
    'published'
  ),
  (
    'Financial Modeling for Strategic Decision Making',
    'financial-modeling-strategic-decisions',
    'Build robust financial models that support strategic planning and investment decisions with confidence.',
    'Financial modeling is a critical skill for strategic decision-making. This article covers best practices for building reliable, insightful financial models.

## Model Design Principles

Good financial models are transparent, flexible, and well-documented. They should be easy to understand and modify as assumptions change.

## Key Components

1. **Revenue Projections**: Market-based forecasting
2. **Cost Structure**: Fixed and variable cost analysis
3. **Capital Requirements**: Investment and working capital needs
4. **Sensitivity Analysis**: Understanding key drivers and risks

## Scenario Planning

Develop base, optimistic, and pessimistic scenarios to understand the range of potential outcomes and inform risk management strategies.

## Best Practices

- Use consistent formatting and clear labeling
- Separate inputs, calculations, and outputs
- Include assumption documentation
- Build in error checks and validation

## Tools and Techniques

Modern financial modeling leverages both traditional spreadsheet tools and advanced analytics platforms for more sophisticated analysis.',
    '/financial-modeling-charts-graphs.jpg',
    'Finance',
    'Jennifer Lee',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Jennifer',
    NOW() - INTERVAL '12 days',
    false,
    7,
    'published'
  ),
  (
    'Operational Excellence: Continuous Improvement Strategies',
    'operational-excellence-continuous-improvement',
    'Implement proven methodologies for driving operational excellence and building a culture of continuous improvement.',
    'Operational excellence is not a destination but a journey of continuous improvement. This guide explores methodologies and practices for achieving operational excellence.

## Core Methodologies

- **Lean**: Eliminating waste and maximizing value
- **Six Sigma**: Reducing variation and defects
- **Kaizen**: Continuous incremental improvement
- **Agile**: Iterative, adaptive approaches

## Building the Foundation

Success requires leadership commitment, employee engagement, and a systematic approach to identifying and solving problems.

## Key Performance Indicators

Track metrics across quality, cost, delivery, and safety (QCDS) to measure progress and identify improvement opportunities.

## Sustaining Improvements

Create standard work, implement visual management, and establish regular review cycles to ensure improvements stick.

## Cultural Transformation

Operational excellence ultimately requires a cultural shift toward problem-solving, experimentation, and learning from failures.',
    '/operational-efficiency-process-optimization.jpg',
    'Operations',
    'Robert Martinez',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Robert',
    NOW() - INTERVAL '15 days',
    false,
    8,
    'published'
  );
