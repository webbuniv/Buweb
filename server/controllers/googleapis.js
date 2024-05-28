import google from 'googleapis';
import path from 'path';
import fs from 'fs';

const SCOPES = ['https://www.googleapis.com/auth/analytics.readonly'];
const KEY_FILE_PATH = path.join(__dirname, '..', 'path-to-your-credentials-file.json'); 

const analyticsReporting = google.analyticsreporting('v4');

const getAuth = () => {
  const credentials = JSON.parse(fs.readFileSync(KEY_FILE_PATH, 'utf8'));
  const auth = new google.auth.JWT(
    credentials.client_email,
    null,
    credentials.private_key,
    SCOPES
  );
  return auth;
};

const getAnalyticsData = async (req, res) => {
  try {
    const auth = getAuth();
    const response = await analyticsReporting.reports.batchGet({
      auth,
      requestBody: {
        reportRequests: [
          {
            viewId: 'YOUR_VIEW_ID', // Replace with your Google Analytics view ID
            dateRanges: [
              {
                startDate: '30daysAgo',
                endDate: 'today',
              },
            ],
            metrics: [
              {
                expression: 'ga:sessions',
              },
            ],
            dimensions: [
              {
                name: 'ga:date',
              },
            ],
          },
        ],
      },
    });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAnalyticsData,
};
