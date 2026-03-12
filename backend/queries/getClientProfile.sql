SELECT
    c.*,
    m.*,
    e.*,
    COALESCE(SUM(p.payment_amount), 0) AS total_payments,
    COALESCE(
        SUM(
            CASE
                WHEN p.payment_destination = 'trust' THEN p.payment_amount
                ELSE 0
            END
        ),
        0
    ) AS total_trust,
    COALESCE(
        SUM(
            CASE
                WHEN p.payment_destination = 'office' THEN p.payment_amount
                ELSE 0
            END
        ),
        0
    ) AS total_office,
    MAX(p.payment_amount) AS total_max,
    MAX(
        CASE
            WHEN p.payment_paidby = 'thirdparty' THEN 1
            ELSE 0
        END
    ) AS third_party,
    SUM(p.payment_flag = 1) as total_flags
FROM
    CLIENT c
    JOIN MATTER m ON c.client_id = m.client_id
    JOIN ENTITY e ON c.client_id = e.client_id
    LEFT JOIN PAYMENT p ON c.client_id = p.client_id
WHERE
    user_id = (?)
GROUP BY
    c.client_id