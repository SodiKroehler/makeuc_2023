import { NextResponse, NextRequest} from 'next/server'
import {prismaBugger} from "../../lib/prismaBugger";
const speech = require('@google-cloud/speech');

export async function POST(req: NextRequest) {
  const client = new speech.SpeechClient();

//   const client = language_v1.LanguageServiceClient(
//     client_options={"api_key": api_key_string, "quota_project_id": quota_project_id}
// )
  const gcsUri = 'gs://cloud-samples-data/speech/brooklyn_bridge.raw';

  const audio = {
    uri: gcsUri,
  };
  const config = {
    encoding: 'LINEAR16',
    sampleRateHertz: 16000,
    languageCode: 'en-US',
  };
  const request = {
    audio: audio,
    config: config,
  };

  const [response] = await client.recognize(request);
  console.log(response.results)
  const transcription = response.results.map(result => result.alternatives[0].transcript).join('\n');
  console.log(`Transcription: ${transcription}`);


      return NextResponse.json({status: 200})
  }