
    // NHE representative: bottom NHE SERVICES line.
    // Leave the second customer signing line blank.

    // Signature above Authorized Representative
    drawSignature(
      page, representative,
      245, 713, 160, 19
    );

    // Printed name above (NHE SERVICES)
    drawText(
      page, font, repName,
      39, 711, 195, 9
    );

    // Date above Date
    drawText(
      page, font, date,
      435, 711, 120, 9
    );
