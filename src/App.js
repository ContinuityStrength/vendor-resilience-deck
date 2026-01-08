<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vendor Resilience Exercise Deck - McKinsey Style Preview</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            background-color: #ffffff;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
        }

        /* Header */
        .header {
            background-color: #ffffff;
            padding: 24px 40px;
            border-bottom: 1px solid #e8e8e8;
            box-shadow: 0 1px 3px rgba(0,0,0,0.04);
        }

        .header-content {
            max-width: 1400px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            height: 36px;
        }

        .header-title {
            font-size: 15px;
            color: #6b7280;
            font-weight: 400;
            letter-spacing: 0.3px;
        }

        /* Main Content */
        .main-content {
            padding: 80px 40px 60px 40px;
            max-width: 680px;
            margin: 0 auto;
            flex: 1;
        }

        h1 {
            text-align: center;
            margin-bottom: 16px;
            color: #111827;
            font-size: 42px;
            font-weight: 300;
            letter-spacing: -0.5px;
            line-height: 1.2;
        }

        .subtitle {
            text-align: center;
            color: #6b7280;
            margin-bottom: 56px;
            font-size: 18px;
            line-height: 1.6;
            font-weight: 400;
        }

        /* Demo Banner */
        .demo-banner {
            background-color: #fffbeb;
            padding: 20px 24px;
            border-radius: 8px;
            margin-bottom: 48px;
            border: 1px solid #fcd34d;
        }

        .demo-banner-title {
            margin: 0 0 8px 0;
            font-weight: 600;
            color: #92400e;
            font-size: 15px;
            letter-spacing: 0.2px;
        }

        .demo-banner-text {
            margin: 0;
            font-size: 14px;
            color: #78350f;
            line-height: 1.5;
        }

        .demo-banner-text a {
            color: #b45309;
            font-weight: 600;
            text-decoration: underline;
        }

        /* Buttons */
        .button-container {
            display: flex;
            flex-direction: column;
            gap: 16px;
            margin-bottom: 48px;
        }

        .btn-primary {
            padding: 18px 32px;
            font-size: 16px;
            background-color: #1e40af;
            color: white;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            font-weight: 500;
            letter-spacing: 0.3px;
            transition: all 0.2s;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }

        .btn-primary:hover {
            background-color: #1e3a8a;
            box-shadow: 0 2px 4px rgba(0,0,0,0.15);
        }

        .btn-secondary {
            padding: 18px 32px;
            font-size: 16px;
            background-color: #ffffff;
            color: #374151;
            border: 1px solid #d1d5db;
            border-radius: 6px;
            cursor: pointer;
            font-weight: 500;
            letter-spacing: 0.3px;
            transition: all 0.2s;
            box-shadow: 0 1px 2px rgba(0,0,0,0.05);
        }

        .btn-secondary:hover {
            background-color: #f9fafb;
            border-color: #9ca3af;
        }

        .btn-outline {
            padding: 18px 32px;
            font-size: 16px;
            background-color: #ffffff;
            color: #1e40af;
            border: 1px solid #1e40af;
            border-radius: 6px;
            cursor: pointer;
            font-weight: 500;
            letter-spacing: 0.3px;
            transition: all 0.2s;
        }

        .btn-outline:hover {
            background-color: #eff6ff;
        }

        /* Bottom Link */
        .bottom-link {
            text-align: center;
            margin-top: 40px;
        }

        .bottom-link a {
            color: #1e40af;
            text-decoration: none;
            font-weight: 500;
            font-size: 15px;
            letter-spacing: 0.2px;
        }

        .bottom-link a:hover {
            text-decoration: underline;
        }

        /* Footer */
        .footer {
            background-color: #f9fafb;
            padding: 32px 40px;
            margin-top: 80px;
            border-top: 1px solid #e8e8e8;
        }

        .footer-content {
            max-width: 1400px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 16px;
        }

        .footer-copyright {
            color: #6b7280;
            font-size: 14px;
            font-weight: 400;
        }

        .footer-links {
            display: flex;
            gap: 32px;
            flex-wrap: wrap;
        }

        .footer-links a {
            color: #4b5563;
            text-decoration: none;
            font-size: 14px;
            font-weight: 500;
        }

        .footer-links a:hover {
            color: #1e40af;
        }

        /* Responsive */
        @media (max-width: 768px) {
            h1 {
                font-size: 32px;
            }

            .main-content {
                padding: 60px 24px 40px 24px;
            }

            .header {
                padding: 20px 24px;
            }

            .footer-content {
                flex-direction: column;
                align-items: flex-start;
            }
        }
    </style>
</head>
<body>
    <!-- Header -->
    <div class="header">
        <div class="header-content">
            <img src="https://continuitystrength.com/s/CS-Logo_Cropped-and-Transparent.png" alt="Continuity Strength" class="logo">
            <div class="header-title">Vendor Resilience Exercise Deck</div>
        </div>
    </div>

    <!-- Main Content -->
    <div class="main-content">
        <h1>Vendor Resilience Exercise Deck</h1>
        
        <p class="subtitle">
            Test your team's response to vendor failures. Identify gaps before crises hit.
        </p>

        <!-- Demo Mode Banner -->
        <div class="demo-banner">
            <p class="demo-banner-title">Demo Mode: 3 scenarios + 12 wild cards</p>
            <p class="demo-banner-text">
                Get the full deck with 50 scenarios + 48 wild cards. 
                <a href="http://continuitystrength.com/buycards">Purchase now →</a>
            </p>
        </div>

        <!-- Action Buttons -->
        <div class="button-container">
            <button class="btn-primary">Draw Random Scenario</button>
            <button class="btn-secondary">Browse Scenarios & Select</button>
            <button class="btn-outline">Enter Access Code</button>
        </div>

        <!-- Bottom Purchase Link -->
        <div class="bottom-link">
            <a href="http://continuitystrength.com/buycards">
                Get the full deck: 50 scenarios + 48 wild cards →
            </a>
        </div>
    </div>

    <!-- Footer -->
    <div class="footer">
        <div class="footer-content">
            <div class="footer-copyright">© 2025 Continuity Strength</div>
            <div class="footer-links">
                <a href="https://www.continuitystrength.com/TPRM">www.ContinuityStrength.com</a>
                <a href="mailto:info@ContinuityStrength.com">info@ContinuityStrength.com</a>
            </div>
        </div>
    </div>
</body>
</html>
