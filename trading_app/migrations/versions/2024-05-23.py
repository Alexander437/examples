"""Add message1

Revision ID: e318ce034be3
Revises: 780d19e3d125
Create Date: 2024-05-22 09:14:00.349295

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'e318ce034be3'
down_revision: Union[str, None] = '780d19e3d125'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('message', sa.Column('message', sa.String(), nullable=True))
    op.drop_column('message', 'mesage')
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('message', sa.Column('mesage', sa.VARCHAR(), autoincrement=False, nullable=True))
    op.drop_column('message', 'message')
    # ### end Alembic commands ###