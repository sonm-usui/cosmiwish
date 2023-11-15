import { NextResponse } from 'next/server';
import crypto from 'crypto';
import { createClient } from '@supabase/supabase-js';
import { redirect } from 'next/navigation'

const SECRET = '551349dd1549d9cf0e186214e28adbd6921891db116ef8957f2fd7c2dbc1b8ab';
const SUPABASE_URL = 'https://wuuynceixebcfprueyil.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind1dXluY2VpeGViY2ZwcnVleWlsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk1NjU5NjIsImV4cCI6MjAxNTE0MTk2Mn0.xX3pxsezWqnIQEF66rHlMBY5VzQ0CpGAuQNGotRFqz4';
const SUPER_SECRET = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind1dXluY2VpeGViY2ZwcnVleWlsIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5OTU2NTk2MiwiZXhwIjoyMDE1MTQxOTYyfQ.44U-3Oxu2btwWh_rzE2urwyQ_9-zqzdL7Ll1aCbQWNE';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export async function POST(request: Request, response: Response) {
    const signature = request.headers.get('X-Signature');
    if (!signature) {
        return new NextResponse('Signature header missing', { status: 401 });
    }
    
    const body = await request.text();
    const payload = JSON.parse(JSON.parse(body)?.meta?.custom_data?.data);
    const data = JSON.parse(body)?.data?.attributes?.status;
    if(data === 'paid'){
        const { data, error } = await supabase
          .from('wishes')
          .insert(payload)
          .select()
    }
    
    // Validate the signature
    const isValidSignature = verifySignature(body, signature);
    if (!isValidSignature) {
      return new NextResponse('Invalid signature', { status: 401 });
    }
  
    // Continue processing the request since the signature is valid
    console.log('Valid signature. Processing request...');
  
    // Your logic here...
  
    // Send a response to the client
    return new NextResponse(JSON.stringify({ message: 'POST request received' }));
}


function verifySignature(body: string, signature: string): boolean {
    const hash = crypto.createHmac('sha256', SECRET).update(body).digest('hex');
    const expectedSignature = SECRET;
  
    // console.log('Signature:', signature);
    // console.log('Expected Signature:', S);
  
    const signatureBuffer = Buffer.from(signature, 'utf-8'); // Adjust the encoding if needed
    const expectedSignatureBuffer = Buffer.from(expectedSignature, 'utf-8'); // Adjust the encoding if needed
  
    console.log('Signature Buffer Length:', signatureBuffer.length);
    console.log('Expected Signature Buffer Length:', expectedSignatureBuffer.length);
  
    try {
      return crypto.timingSafeEqual(signatureBuffer, expectedSignatureBuffer);
    } catch (error) {
      console.error('Error comparing buffers:', error);
      return false;
    }
  }
  