    const authorsTableData = {
        columns: [
          { name: "author", align: "left" },
          { name: "function", align: "left" },
          { name: "status", align: "center" },
          { name: "employed", align: "center" },
          { name: "action", align: "center" },
        ],
      
        rows: [
          {
            author: <Author image={team2} name="John Michael" email="john@creative-tim.com" />,
            function: <Function job="Manager" org="Organization" />,
            status: (
              <SoftBadge variant="gradient" badgeContent="online" color="success" size="xs" container />
            ),
            employed: (
              <SoftTypography variant="caption" color="secondary" fontWeight="medium">
                23/04/18
              </SoftTypography>
            ),
            action: (
              <SoftTypography
                component="a"
                href="#"
                variant="caption"
                color="secondary"
                fontWeight="medium"
              >
                Edit
              </SoftTypography>
            ),
          },
          {
            author: <Author image={team3} name="Alexa Liras" email="alexa@creative-tim.com" />,
            function: <Function job="Programator" org="Developer" />,
            status: (
              <SoftBadge variant="gradient" badgeContent="offline" color="secondary" size="xs" container />
            ),
            employed: (
              <SoftTypography variant="caption" color="secondary" fontWeight="medium">
                11/01/19
              </SoftTypography>
            ),
            action: (
              <SoftTypography
                component="a"
                href="#"
                variant="caption"
                color="secondary"
                fontWeight="medium"
              >
                Edit
              </SoftTypography>
            ),
          },
          {
            author: <Author image={team4} name="Laurent Perrier" email="laurent@creative-tim.com" />,
            function: <Function job="Executive" org="Projects" />,
            status: (
              <SoftBadge variant="gradient" badgeContent="online" color="success" size="xs" container />
            ),
            employed: (
              <SoftTypography variant="caption" color="secondary" fontWeight="medium">
                19/09/17
              </SoftTypography>
            ),
            action: (
              <SoftTypography
                component="a"
                href="#"
                variant="caption"
                color="secondary"
                fontWeight="medium"
              >
                Edit
              </SoftTypography>
            ),
          },
          {
            author: <Author image={team3} name="Michael Levi" email="michael@creative-tim.com" />,
            function: <Function job="Programator" org="Developer" />,
            status: (
              <SoftBadge variant="gradient" badgeContent="online" color="success" size="xs" container />
            ),
            employed: (
              <SoftTypography variant="caption" color="secondary" fontWeight="medium">
                24/12/08
              </SoftTypography>
            ),
            action: (
              <SoftTypography
                component="a"
                href="#"
                variant="caption"
                color="secondary"
                fontWeight="medium"
              >
                Edit
              </SoftTypography>
            ),
          },
          {
            author: <Author image={team2} name="Richard Gran" email="richard@creative-tim.com" />,
            function: <Function job="Manager" org="Executive" />,
            status: (
              <SoftBadge variant="gradient" badgeContent="offline" color="secondary" size="xs" container />
            ),
            employed: (
              <SoftTypography variant="caption" color="secondary" fontWeight="medium">
                04/10/21
              </SoftTypography>
            ),
            action: (
              <SoftTypography
                component="a"
                href="#"
                variant="caption"
                color="secondary"
                fontWeight="medium"
              >
                Edit
              </SoftTypography>
            ),
          },
          {
            author: <Author image={team4} name="Miriam Eric" email="miriam@creative-tim.com" />,
            function: <Function job="Programtor" org="Developer" />,
            status: (
              <SoftBadge variant="gradient" badgeContent="offline" color="secondary" size="xs" container />
            ),
            employed: (
              <SoftTypography variant="caption" color="secondary" fontWeight="medium">
                14/09/20
              </SoftTypography>
            ),
            action: (
              <SoftTypography
                component="a"
                href="#"
                variant="caption"
                color="secondary"
                fontWeight="medium"
              >
                Edit
              </SoftTypography>
            ),
          },
        ],
      };
      export default authorsTableData;