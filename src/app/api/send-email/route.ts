// pages/api/send-email.js

import {
  NextRequest,
  NextResponse,
} from "next/server";
import * as sgMail from "@sendgrid/mail";
interface MailBody {
  firstname: string;
  lastname:
    | string
    | undefined;
  email: string;
  phone:
    | string
    | undefined;
  message: string;
}

export async function POST(
  req: NextRequest,
  res: NextResponse
) {
  if (
    req.method ===
    "POST"
  ) {
    const data: MailBody =
      await req.json();

    sgMail.setApiKey(
      process
        .env
        .REACT_APP_SENDGRID_API as string
    );
    const msg =
      {
        to: "sk10882@nyu.edu", // Change to your recipient
        from: "saumaykilla@gmail.com", // Change to your verified sender
        subject:
          "Mail from Portfolio Website",
        text: ` Email`,
        html: `<p>Name: ${
          data.firstname
        } ${
          data?.lastname
        }</p>
        <p>Email: ${
          data.email
        } </p>
        ${
          data.phone
            ? `<p>Phone: ${data.phone} </p>`
            : ""
        }
        <p>Message: ${
          data.message
        } </p>`,
      };
    try {
      await sgMail.send(
        msg
      );
      console.log(
        "Message Sent"
      );
      return NextResponse.json(
        {
          message:
            "Message Sent",
        },
        {
          status: 200,
        }
      );
    } catch (error) {
      return NextResponse.json(
        {
          message:
            error,
        },
        {
          status: 403,
        }
      );
    }
  } else {
    return NextResponse.json(
      {
        message:
          "Method Not Allowed",
      },
      {
        status: 500,
      }
    );
  }
}
